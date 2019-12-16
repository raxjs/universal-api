const fs = require('fs-extra');
const path = require('path');

module.exports = function(rootPath, packageName, platformName) {
  const dirName = path.resolve(rootPath, `${packageName}/miniapp`);

  fs.ensureDirSync(dirName);
  const formatOriginalPath = `${dirName}/formatOriginal.ts`;
  const promisifyFnPath = `${dirName}/promisifyFn.ts`;
  // Copy formatOriginal.js
  if (!fs.ensureFileSync(formatOriginalPath)) {
    fs.copyFileSync(path.join(__dirname, 'template', 'formatOriginal.ts'), formatOriginalPath);
  }
  // Copy promisifyFn.js
  if (!fs.ensureFileSync(promisifyFnPath)) {
    fs.copyFileSync(path.join(__dirname, 'template', 'promisifyFn.ts'), promisifyFnPath);
  }
  const platformDir = path.resolve(dirName, platformName);
  fs.ensureFileSync(`${platformDir}/index.ts`);
  return platformDir;
};
