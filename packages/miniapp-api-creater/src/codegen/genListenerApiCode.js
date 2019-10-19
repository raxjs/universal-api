const fs = require('fs-extra');
const log = require('../log');
const {
  generateNormal,
  generateOverride,
} = require('../template/listenerTemplate');
const platformMap = require('../platformMap');
const handlePromise = require('../handlePromise');
const initDir = require('../initDir');

module.exports = function(platformName, listeners, overrideMap, rootPath) {
  const platform = platformMap[platformName];
  Object.keys(listeners).map(packageName => {
    const dirName = initDir(rootPath, packageName, platformName);
    Object.keys(listeners[packageName]).map(apiName => {
      log.info(`Creating ${apiName}`);
      // Append reference into index
      handlePromise(
        fs.appendFile(
          `${dirName}/index.js`,
          `exports.${apiName} = require('./${apiName}');\n`,
        ),
        apiName,
      );

      const overrideConfig =
        overrideMap[packageName] && overrideMap[packageName][apiName];
      if (!overrideConfig) {
        handlePromise(
          fs.writeFile(
            `${dirName}/${apiName}.js`,
            generateNormal(platform, listeners[packageName][apiName]),
          ),
          apiName,
        );
      } else {
        const {
          name = listeners[packageName][apiName],
          responseMap,
        } = overrideConfig;
        handlePromise(
          fs.writeFile(
            `${dirName}/${name}.js`,
            generateOverride(platform, name, responseMap),
          ),
          apiName,
        );
      }
    });
  });
};
