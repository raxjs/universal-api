const fs = require('fs-extra');
const { ROOT_PATH } = require('./constants');

module.exports = function(packageName, platformName) {
  const dirName = `${ROOT_PATH}/${packageName}/${platformName}`;
  fs.ensureDirSync(dirName);
  fs.ensureFileSync(`${dirName}/index.js`);
  return dirName;
};
