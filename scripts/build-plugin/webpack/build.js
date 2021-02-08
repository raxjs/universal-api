const getDistConfig = require('./conf/getWebpackConf');
const conf = require('../conf');
const path = require('path');
const logger = require('../logger');

module.exports = (api, {entry, output, sourceMap, apiInfo, pkgInfo, isMain}) => {
  const { context, registerTask, onGetWebpackConfig } = api;
  const {rootDir} = context;
  logger(`---------- 开始编译 ${pkgInfo.name} ----------`);
  const config = getDistConfig(context, {
    isMain,
    sourceMap,
    pkgInfo,
    entry,
    unNeedSplit: apiInfo.unNeedSplit,
    output: path.resolve(rootDir, output)
  });
  // onGetWebpackConfig('component-build-web-umd', (config) => {
  //   getDistConfig(config, context, {
  //     isMain,
  //     sourceMap,
  //     pkgInfo,
  //     entry,
  //     unNeedSplit: apiInfo.unNeedSplit,
  //     output: path.resolve(rootDir, output)
  //   });
  // });
  // onGetWebpackConfig('component-build-web', (config) => {
  //   getDistConfig(config, context, {
  //     isMain,
  //     sourceMap,
  //     pkgInfo,
  //     entry,
  //     unNeedSplit: true,
  //     output: path.resolve(rootDir, output)
  //   });
  //   config
  //   // 修改 entry 配置
  //   .entry('index')
  //     .clear()
  //     .add(entry)
  //     .end()
  //   // 修改 output 配置
  //   .output
  //     .path(path.resolve(output, 'cache'));
  // });
  // onGetWebpackConfig('component-build-web-es6', (config) => {
  //   getDistConfig(config, context, {
  //     isMain,
  //     sourceMap,
  //     pkgInfo,
  //     entry,
  //     unNeedSplit: true,
  //     output: path.resolve(rootDir, output)
  //   });
  //   config
  //   // 修改 entry 配置
  //   .entry('index')
  //     .clear()
  //     .add(entry)
  //     .end()
  //   // 修改 output 配置
  //   .output
  //     .path(path.resolve(output, 'cache'));
  // });
  

  registerTask(`uni-build-${pkgInfo.name.replace('@uni/', '')}`, config);
}