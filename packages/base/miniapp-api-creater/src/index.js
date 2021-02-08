const fs = require('fs-extra');
const path = require('path');
const genListenerApiCode = require('./codegen/genListenerApiCode');
const genSyncApiCode = require('./codegen/genSyncApiCode');
const genPromisifyApiCode = require('./codegen/genPromisifyApiCode');

module.exports = function(configs, distDirectory) {
  fs.ensureDirSync(distDirectory);
  Object.keys(configs).map(configName => {
    const {
      platformName,
      listenerApis,
      syncApis,
      needPromisifyApis,
      overrideMap = {},
    } = configs[configName];
    if (listenerApis) {
      genListenerApiCode(platformName, listenerApis, overrideMap, distDirectory);
    }
    if (syncApis) {
      genSyncApiCode(platformName, syncApis, overrideMap, distDirectory);
    }
    if (needPromisifyApis) {
      genPromisifyApiCode(platformName, needPromisifyApis, overrideMap, distDirectory);
    }
  });
};
