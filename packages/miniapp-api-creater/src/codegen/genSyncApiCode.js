const fs = require('fs-extra');
const log = require('../log');
const {
  generateNormal,
  generateOverride,
} = require('../template/syncTemplate');
const platformMap = require('../platformMap');
const handlePromise = require('../handlePromise');
const initDir = require('../initDir');

module.exports = function(platformName, syncs, overrideMap, rootPath) {
  const platform = platformMap[platformName];
  Object.keys(syncs).map(packageName => {
    const dirName = initDir(rootPath, packageName, platformName);
    Object.keys(syncs[packageName]).map(apiName => {
      log.info(`Creating ${apiName}`);
      handlePromise(
        fs.appendFile(
          `${dirName}/index.ts`,
          `export * from './${apiName}';\n`,
        ),
        apiName,
      );
      const originalApiName = syncs[packageName][apiName];
      const overrideConfig =
        overrideMap[packageName] && overrideMap[packageName][originalApiName];
      if (!overrideConfig) {
        handlePromise(
          fs.writeFile(
            `${dirName}/${apiName}.ts`,
            generateNormal(platform, syncs[packageName][apiName]),
          ),
          apiName,
          platformName,
        );
      } else {
        const {
          name = syncs[packageName][apiName],
          responseMap,
        } = overrideConfig;
        handlePromise(
          fs.writeFile(
            `${dirName}/${apiName}.js`,
            responseMap
              ? generateOverride(platform, name, responseMap)
              : generateNormal(platform, name),
          ),
          apiName,
          platformName,
        );
      }
    });
  });
};
