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
const copy = require('rollup-plugin-copy');
const alias = require('@rollup/plugin-alias');
const {terser} = require("rollup-plugin-terser");
const filesize = require("rollup-plugin-filesize");
const fs = require('fs-extra');
const conf = require('./config');
// const del = require("rollup-plugin-delete");
const root = process.cwd();
const outputDir = 'dist/';

module.exports = (inputPath, itemOutputPath, sourceMap, apiInfo) => {
  const isMain = inputPath.indexOf('packages/main/index.ts') !== -1;
  const sourcePath = isMain ? inputPath.replace(/\/index\.(t|j)s/, '') : inputPath.replace(/\/src\/.*/, '');
  const outputPath = outputDir + itemOutputPath;
  // const typesPath = path.resolve(root, inputPath.replace("index.ts", "types.ts"));
  

  const getConfig = (_inputPath, _outputPath, needTypes = true) => {
    let override = { compilerOptions: { declaration: needTypes, declarationDir: outputPath }, include: ['types', inputPath, sourcePath + "/**/types.ts"] };
    const aliasEntries = [];
      Object.values(sourceMap).forEach(item => {
        item.pkgInfo.forEach(i => {
          aliasEntries.push({
            find: i.name,
            replacement: path.resolve(root, item.path)
          });
        });
      });
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
            name: 'evapi',
            file: path.resolve(root, _outputPath + 'index.umd.js'),
            format: 'umd',
            sourcemap: false,
            plugins: [
              terser()
            ]
        }
      }
      return ['umd', 'esm', 'cjs'].map(format => {
        return {
          input: _inputPath,
          output: outputMap[format],
          external: [format == 'umd' ? '' : /@babel\/runtime/],
          plugins: [...(isMain ? [progress()] : []),...[
            // progress(),
            alias(format == 'umd' || isMain ? {
              entries: [...aliasEntries],
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
              builtins: true,
              dependencies: format !== 'umd',
              packagePath: path.resolve(root, outputPath, 'package.json'),
              peerDependencies: format !== 'umd',
            }),

            typescript({
              tsconfigOverride: override
            }),
            babel.default({ 
              babelHelpers: format == 'umd' ? 'inline' : 'runtime',
              exclude: 'node_modules/**',
              extensions: ['.ts', '.js'],
              presets: [
                [
                  '@babel/preset-env',
                  {
                    modules: false,
                    targets: {
                      browsers: '> 0.25%, not dead',
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
            // babel.getBabelOutputPlugin({
            //   presets: [
            //     [
            //       '@babel/preset-env',
            //       {
            //         modules: format == 'umd' ? 'umd' : false,
            //         targets: {
            //           browsers: '> 0.25%, not dead',
            //         },
            //       },
            //     ],
            //   ],
            //   plugins: [
            //     [
            //       '@babel/plugin-transform-runtime',
            //       {
            //         useESModules: format == 'esm' ? true : false,
            //         corejs: 3,
            //         helpers: format == 'umd' ? false : true,
            //       },
            //     ],
            //     [
            //       '@babel/plugin-proposal-class-properties',
            //       {
            //         loose: true,
            //       },
            //     ],
            //   ]
            // }),
            json(),
            copy({
              targets: [
                { src: isMain ? 
                  path.resolve(root, 'README.md') : 
                  (fs.pathExistsSync(path.resolve(root, sourcePath + '/README.md')) ? path.resolve(root, sourcePath + '/README.md') : path.resolve(root, sourcePath + '/README.md.c')), 
                  dest: path.resolve(root, outputPath), rename: 'README.md'},
                { src: isMain ? path.resolve(root, 'README.en-US.md') : (fs.pathExistsSync(path.resolve(root, sourcePath + '/README.en-US.md')) ? path.resolve(root, sourcePath + '/README.en-US.md') : path.resolve(root, sourcePath + '/README.en-US.md.c')), dest: path.resolve(root, outputPath), rename: 'README.en-US.md'}
              ],
            }),
            visualizer(),
            // filesize(),
          ]],
        }
      }
    )
  }

  let res = getConfig(inputPath, outputPath);
  if (!apiInfo.unNeedSplit) {
    conf.containerList.forEach(containerName => {
      let _inputPath = inputPath.replace(/\/index\.(t|j)s/, '/' + containerName + '/index.ts');
      let _outputPath = outputPath + '/' + containerName + '/';
      res.push(...getConfig(_inputPath, _outputPath, false));
    })
  }
  return res;
};