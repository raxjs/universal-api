const { listenerApis, syncApis, needPromisifyApis } = require('../native');

const overrideMap = require('./overrideMap');

module.exports = {
  platformName: 'wechat',
  listenerApis,
  syncApis,
  needPromisifyApis,
  overrideMap,
};
