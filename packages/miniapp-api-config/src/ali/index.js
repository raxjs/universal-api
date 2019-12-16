const { listenerApis, syncApis, needPromisifyApis } = require('../native');

const overrideMap = require('./overrideMap');

module.exports = {
  platformName: 'ali',
  listenerApis,
  syncApis,
  needPromisifyApis,
  overrideMap,
};
