const { listenerApis, syncApis, needPromisifyApis } = require('../native');

const overrideMap = './overrideMap';

module.exports = {
  platformName: 'wechat',
  listenerApis,
  syncApis,
  needPromisifyApis,
  overrideMap,
};
