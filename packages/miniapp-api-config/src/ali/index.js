const { listenerApis, syncApis, needPromisifyApis } = require('../native');

const overrideMap = './overrideMap';

module.exports = {
  platformName: 'ali',
  listenerApis,
  syncApis,
  needPromisifyApis,
  overrideMap,
};
