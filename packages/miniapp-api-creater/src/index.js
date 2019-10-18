const fs = require('fs-extra');
const genListenerApiCode = require('./codegen/genListenerApiCode');
const genSyncApiCode = require('./codegen/genSyncApiCode');
const genPromisifyApiCode = require('./codegen/genPromisifyApiCode');
const formatOriginal = require('./formatOriginal');
const promisifyFn = require('./promisifyFn');
const { ROOT_PATH } = require('./constants');

module.exports = function(configs) {
  if (fs.pathExistsSync(ROOT_PATH)) {
    fs.removeSync(ROOT_PATH);
  }
  fs.ensureDirSync(ROOT_PATH);
  const formatOriginalPath = `${ROOT_PATH}/formatOriginal.js`;
  const promisifyFnPath = `${ROOT_PATH}/promisifyFn.js`;
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
      genListenerApiCode(platformName, listenerApis, overrideMap);
    }
    if (syncApis) {
      genSyncApiCode(platformName, syncApis, overrideMap);
    }
    if (needPromisifyApis) {
      genPromisifyApiCode(platformName, needPromisifyApis, overrideMap);
    }
  });
};
