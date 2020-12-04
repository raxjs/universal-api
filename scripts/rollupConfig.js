const path = require('path');
const babel = require('@rollup/plugin-babel');
// const rollup = require('rollup');
const typescript = require('rollup-plugin-typescript2');
// resolve将我们编写的源码与依赖的第三方库进行合并
const resolve = require('@rollup/plugin-node-resolve').default;
// 解决rollup.js无法识别CommonJS模块
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
// const mainPkg = require("../package.json");
const autoExternal = require('rollup-plugin-auto-external');
// const progress = require('rollup-plugin-progress');
const visualizer = require('rollup-plugin-visualizer');
const copy = require('rollup-plugin-copy');
const alias = require('@rollup/plugin-alias');
// const del = require("rollup-plugin-delete");
const root = process.cwd();
const outputDir = 'dist/';

module.exports = (inputPath, itemOutputPath, sourceMap) => {
  const isMain = inputPath.indexOf('packages/index.ts') !== -1;
  console.log(inputPath, isMain);
  const sourcePath = isMain ? inputPath.replace(/\/index\.ts/, '') : inputPath.replace(/\/src\/.*/, '');
  const outputPath = outputDir + itemOutputPath;
  let override = { compilerOptions: { declaration: true, declarationDir: outputPath }, include: [inputPath] };

  const aliasEntries = [];
  Object.values(sourceMap).forEach(item => {
    item.pkgInfo.forEach(i => {
      aliasEntries.push({
        find: i.name,
        replacement: path.resolve(root, item.path)
      });
    });
  });
  return {
    input: inputPath,
    output: [

      {
        exports: 'named',
        file: path.resolve(root, outputPath + 'index.js'),
        format: 'cjs',
        sourcemap: false,
        globals: isMain ? {} : {
          'universal-device': 'universalDevice',
          'universal-env': 'universalEnv',
        }
      },
      {
        exports: 'named',
        file: path.resolve(root, outputPath + 'index.es.js'),
        format: 'es',
      },
      {
        exports: 'named',
        name: 'guie',
        file: path.resolve(root, outputPath + 'index.umd.js'),
        format: 'umd',
        sourcemap: false,
        globals: isMain ? {} : {
          'universal-device': 'universalDevice',
          'universal-env': 'universalEnv',
        }
      },

    ],
    plugins: [
      // progress(),
      alias(isMain ? {
        entries: aliasEntries
      } : {}),
      resolve({
        // 将自定义选项传递给解析插件
        customResolveOptions: {
          moduleDirectory: 'node_modules'
        }
      }),
      // 将 CommonJS 转换成 ES2015 模块
      commonjs({
        include: 'node_modules/**',
      }),
      autoExternal({
        builtins: false,
        dependencies: true,
        packagePath: path.resolve(root, outputPath, 'package.json'),
        peerDependencies: true,
      }),

      typescript({
        tsconfigOverride: override
      }),
      babel.getBabelOutputPlugin({
        allowAllFormats: true,
        configFile: path.resolve(root, 'scripts/babel.config.js')
      }),
      json(),
      copy({
        targets: [
          { src: isMain ? path.resolve(root, 'README.md') : path.resolve(root, sourcePath + '/README.md'), dest: path.resolve(root, outputPath)},
          { src: isMain ? path.resolve(root, 'README-en-US.md') : path.resolve(root, sourcePath + '/README-en-US.md'), dest: path.resolve(root, outputPath)}
        ],
      }),
      // babel({
      //   babelHelpers: 'bundled'
      // }),


      // terser()
      visualizer(),
      // filesize(),
      // sass(),


    ],
    // external: ['rax']
  };
};