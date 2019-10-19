const fs = require('fs-extra');
const path = require('path');

module.exports = function(rootPath, packageName, platformName) {
  const dirName = path.resolve(rootPath, `${packageName}/miniapp/${platformName}`);
  fs.ensureDirSync(dirName);
  fs.ensureFileSync(`${dirName}/index.js`);
  return dirName;
};
