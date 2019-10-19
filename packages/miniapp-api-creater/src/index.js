const fs = require('fs-extra');
const path = require('path');
const genListenerApiCode = require('./codegen/genListenerApiCode');
const genSyncApiCode = require('./codegen/genSyncApiCode');
const genPromisifyApiCode = require('./codegen/genPromisifyApiCode');
const formatOriginal = require('./formatOriginal');
const promisifyFn = require('./promisifyFn');

module.exports = function(configs, distDirectory) {
  fs.ensureDirSync(distDirectory);
  const formatOriginalPath = `${distDirectory}/formatOriginal.js`;
  const promisifyFnPath = `${distDirectory}/promisifyFn.js`;
  // Write formatOriginal.js
  if (!fs.ensureFileSync(formatOriginalPath)) {
    fs.writeFileSync(formatOriginalPath, `modules.exports = ${formatOriginal}`);
  }
  // Write promisifyFn.js
  if (!fs.ensureFileSync(promisifyFnPath)) {
    fs.writeFileSync(promisifyFnPath, promisifyFn);
  }
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
