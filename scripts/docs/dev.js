const chokidar = require('chokidar');
const md5 = require('md5');
const fs = require('fs-extra');
const path = require('path');
const { initDocs, injectFile } = require('./buildDocs');
const { spawnSync, spawn } = require('child_process');
let preveMd5 = {};

const root = process.cwd();
const filePath = path.resolve(root, './src/packages/**/docs/*.md');
const filePath2 = path.resolve(root, './src/packages/**/**/docs/*.md'); 
const filePath3 = path.resolve(root, './src/packages/**/**/**/docs/*.md'); 
console.log(`开始构建docs`);
initDocs();

const watcher = chokidar.watch([filePath, filePath2, filePath3], {
  ignored: /demo\/.*/, // ignore dotfiles
  persistent: true
});
watcher.on('change', filePath => {
  let currentMd5 = md5(fs.readFileSync(filePath, 'utf-8'))
  if (currentMd5 == preveMd5[filePath]){
      return;
  }
  preveMd5[filePath] = currentMd5;
  console.log(`File ${filePath} has been changed`);
  const fromPath = filePath;
  const toPath = fromPath.replace(/\/docs\//, '/').replace(/\/src\/packages/, '/docs/packages');
    // if (fs.pathExistsSync(fromPath)) {
  fs.copySync(fromPath, toPath);
  injectFile(toPath);
    // }
  // initDocs();
})
spawn('dumi', [
  'dev',
], {
  stdio: 'inherit',
  cwd: path.resolve(root, `./`),
});
