const fs = require('fs-extra');
const path = require('path');
const { ROOT_PATH } = require('./constants');

module.exports = function(packageName, platformName) {
  const dirName = path.resolve(
    process.cwd(),
    `${ROOT_PATH}/${packageName}/${platformName}`,
  );
  fs.ensureDirSync(dirName);
  fs.ensureFileSync(`${dirName}/index.js`);
  return dirName;
};
