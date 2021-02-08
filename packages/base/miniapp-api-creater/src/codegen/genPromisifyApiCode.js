const fs = require('fs-extra');
const log = require('../log');
const {
  generateNormal,
  generateOverride,
} = require('../template/promisifyTemplate');
const platformMap = require('../platformMap');
const handlePromise = require('../handlePromise');
const initDir = require('../initDir');

module.exports = function(
  platformName,
  needPromisifies,
  overrideMap,
  rootPath,
) {
  const platform = platformMap[platformName];
  Object.keys(needPromisifies).map(packageName => {
    const dirName = initDir(rootPath, packageName, platformName);
    Object.keys(needPromisifies[packageName]).map(apiName => {
      log.info(`Creating ${platformName} ${apiName}`);
      handlePromise(
        fs.appendFile(
          `${dirName}/index.ts`,
          `export { default as ${apiName} } from './${apiName}';\n`,
        ),
        apiName,
      );
      const originalApiName = needPromisifies[packageName][apiName];
      const overrideConfig =
        overrideMap[packageName] && overrideMap[packageName][apiName];
      if (!overrideConfig) {
        handlePromise(
          fs.writeFile(
            `${dirName}/${apiName}.ts`,
            generateNormal(platform, needPromisifies[packageName][apiName]),
          ),
          apiName,
          platformName,
        );
      } else {
        const {
          name = needPromisifies[packageName][apiName],
          optionsMap,
          responseMap,
          errorMap,
        } = overrideConfig;
        handlePromise(
          fs.writeFile(
            `${dirName}/${apiName}.ts`,
            generateOverride(platform, name, optionsMap, responseMap, errorMap),
          ),
          apiName,
          platformName,
        );
      }
    });
  });
};
