const path = require('path');
// const nodeExternals = require('webpack-node-externals');
// const getBaseWebpack = require('./getBaseWebpack');
const conf = require('../../conf');
const { getBabelConfig, setBabelAlias } = require('rax-compile-config');


module.exports = (config, context, options) => {
  const { entry, output, pkgInfo, sourceMap, isMain, unNeedSplit } = options;
  // getBaseWebpack(config, context, options);
  const { rootDir } = context;
  
  const babelConfig = getBabelConfig({
    styleSheet: false,
    disableJSXPlus: true,
    custom: {
      ignore: ['**/**/*.d.ts'],
    },
  });
  babelConfig.presets.push([
    '@babel/typescript',
    {
      isTSX: false,
      allExtensions: true,
      // onlyRemoveTypeImports: true,
    }
  ]);

  config.target('web');
  config
  // 修改 entry 配置
  .entry('index')
    .clear()
    .add(entry)
    .end()
  // 修改 output 配置
  .output
    .library(isMain ? 'uni' : 'uni_'+pkgInfo.name.replace('@uni/', '').replace('-', '_'))
    .libraryTarget('umd')
    .path(output + '/dist')
    .filename((pathData) => pathData.chunk.name === 'index' ? 'index.js' : '[name]/index.js');
  !unNeedSplit && conf.containerList.forEach(containerName => {
    let _inputPath = entry.replace(/\/index\.(t|j)s/, '/' + containerName + '/index.ts');
    config
      // 修改 entry 配置
      .entry(containerName)
        .add(_inputPath)
        .end();
  });

  if (sourceMap) {
    Object.values(sourceMap).forEach(item => {
      item.pkgInfo.forEach(i => {
        config.resolve.alias
          .set(i.name, path.resolve(rootDir, item.path))
      });
    });
  }
  config.module
    .rules.clear();
  config.module
    .rule('jsx')
    .test(/\.(js|mjs|jsx)$/)
    //.exclude.add(/node_modules/)
    //.end()
    .use('babel')
    .loader(require.resolve('babel-loader'))
    .options(babelConfig);
  // let override = { compilerOptions: { declaration: apiInfo.declaration, declarationDir: outputPath }, include: ['types', inputPath, sourcePath + "/**/types.ts"] };
  config.module
    .rule('tsx')
    .clear()
    .test(/\.tsx?$/)
    .use('babel')
    .loader(require.resolve('babel-loader'))
    .options(babelConfig)
    .end();
  
  return config;
};
