const path = require('path');
const babel = require('@rollup/plugin-babel');
const typescript = require('rollup-plugin-typescript2');
// resolve将我们编写的源码与依赖的第三方库进行合并
const resolve = require('@rollup/plugin-node-resolve').default;
// 解决rollup.js无法识别CommonJS模块
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
const autoExternal = require('rollup-plugin-auto-external');
const progress = require('rollup-plugin-progress');
const visualizer = require('rollup-plugin-visualizer');
const alias = require('@rollup/plugin-alias');
const {terser} = require("rollup-plugin-terser");
const fs = require('fs-extra');
const conf = require('../conf/index');
const root = process.cwd();
const outputDir = 'dist/';

module.exports = (inputPath, itemOutputPath, sourceMap, pkgInfo, apiInfo, isMain = false) => {
  // const isMain = inputPath.indexOf('packages/main/index.ts') !== -1;
  const sourcePath = isMain ? inputPath.replace(/\/index\.(t|j)s/, '') : inputPath.replace(/\/src\/.*/, '');
  // const outputPath = outputDir + itemOutputPath;
  const outputPath = itemOutputPath;
  // const docPath = isMain ? root : sourcePath.replace('/packages', '/docs/packages');
  // const typesPath = path.resolve(root, inputPath.replace("index.ts", "types.ts"));
  

  const getConfig = (_inputPath, _outputPath, declaration) => {
    let override = { 
      compilerOptions: { 
        declaration: declaration,
        declarationDir: outputPath 
      },
      include: ['types', inputPath, sourcePath + "/**/types.ts"] 
    };
    const aliasEntries = [];
    if (sourceMap) {
      Object.values(sourceMap).forEach(item => {
        item.pkgInfo.forEach(i => {
          aliasEntries.push({
            find: i.name,
            replacement: path.resolve(root, item.path)
          });
        });
      });
    }
      
      const outputMap = {
        cjs: {
          exports: 'named',
          file: path.resolve(root, _outputPath + 'index.js'),
          format: 'cjs',
          sourcemap: false,
          // plugins: isMain ? [
          //   terser()
          // ] : []
        },
        esm: {
          exports: 'named',
          file: path.resolve(root, _outputPath + 'index.es.js'),
          format: 'esm',
          // plugins: isMain ? [
          //   terser()
          // ] : []
        },
        umd: {
            exports: 'named',
            name: isMain ? 'uni' : 'uni_' + pkgInfo.name.replace('@uni/', '').replace('-', '_'),
            file: path.resolve(root, _outputPath + 'index.umd.js'),
            format: 'umd',
            sourcemap: false,
            plugins: [
              terser()
            ]
        }
      }
      return ['cjs', 'esm', 'umd'].map(format => {
        return {
          input: _inputPath,
          output: outputMap[format],
          external: [format == 'umd' ? '' : /@babel\/runtime/],
          plugins: [...(isMain ? [progress()] : []), ...[
            // progress(),
            alias(format == 'umd' || isMain ? {
              entries: [...aliasEntries, { find: '@', replacement: path.resolve(root, 'packages') }],
            } : {entries: [{ find: '@', replacement: path.resolve(root, 'packages') }]}),
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
              builtins: true,
              dependencies: format !== 'umd',
              packagePath: path.resolve(root, outputPath, 'package.json'),
              peerDependencies: format !== 'umd',
            }),

            typescript({
              tsconfigOverride: override
            }),
            babel.default({
              // babelHelpers: 'bundled',
              babelHelpers: format == 'umd' ? 'inline' : 'runtime',
              exclude: 'node_modules/**',
              extensions: ['.ts', '.js'],
              presets: [
                [
                  '@babel/preset-env',
                  {
                    loose: true,
                    modules: false,
                    targets: {
                      browsers: ['last 2 versions', 'IOS >= 8', 'Android >= 4'],
                    },
                  },
                ],
              ],
              plugins: [
                [
                  '@babel/plugin-transform-runtime',
                  {
                    useESModules: format == 'esm' ? true : false,
                    corejs: 3,
                    helpers: format == 'umd' ? false : true,
                  },
                ],
                [
                  '@babel/plugin-proposal-class-properties',
                  {
                    loose: true,
                  },
                ],
              ]
            }),
            json(),
            visualizer(),
            // filesize(),
          ],
        ],
        }
      }
    )
  }

  let res = getConfig(inputPath, outputPath, apiInfo.declaration);
  if (!apiInfo.unNeedSplit) {
    conf.containerList.forEach(containerName => {
      let _inputPath = inputPath.replace(/\/index\.(t|j)s/, '/' + containerName + '/index.ts');
      let _outputPath = outputPath + '/' + containerName + '/';
      res.push(...getConfig(_inputPath, _outputPath, false));
    })
  }
  return res;
};