const path = require('path');
const build = require('./build');

const pluginApiBuilder = (api, options = {}) => {
  
  const { context, onHook, registerCliOption } = api;
  const { command, commandArgs, rootDir } = context;
  registerCliOption({
    name: 'api', // 注册的 cli 参数名称，
    commands: ['build'],  // 支持的命令，如果为空默认任何命令都将执行注册方法
    configWebpack: (config, value, context) => {
      // 对应命令链路上的需要执行的相关操作
    }
  });
  
  if (command === 'build') {
    build(api, options);
  }
};

module.exports = pluginApiBuilder;