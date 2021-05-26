const chokidar = require('chokidar');
const md5 = require('md5');
const fs = require('fs');
const path = require('path');
const { spawnSync, spawn } = require('child_process');
let preveMd5 = {};

const root = process.cwd();
const filePath = path.resolve(root, './src/packages/**/src/**');
const filePath2 = path.resolve(root, './src/packages/**/**/src/*'); 
console.log(`开始构建demo`);
const watcher = chokidar.watch([filePath, filePath2], {
  ignored: /demo\/.*/, // ignore dotfiles
  persistent: true
});
console.log(`demo 执行中`);
watcher.on('change', filePath => {
  let currentMd5 = md5(fs.readFileSync(filePath))
  if (currentMd5 == preveMd5[filePath]){
      return;
  }
  preveMd5[filePath] = currentMd5;
  console.log(`File ${filePath} has been changed`);
  let apiName = filePath.match(/.*?\/src\/packages\/(.*)?\/src.*/)[1];
  apiName = apiName.split('/').slice(-1);
  // const apiInfo = apiConfig[apiName];
  spawnSync('npm', [
    'run',
    'build',
    apiName
  ], {
    stdio: 'inherit',
    cwd: path.resolve(root, `./`),
  });
  // spawnSync('npm', [
  //   'run',
  //   'build'
  // ], {
  //   stdio: 'inherit',
  //   cwd: path.resolve(root, `demos`),
  // });
  // shelljs.exec(`npm run build ${apiName} && cd demos && npm run build && cd ..`);
})
spawn('npm', [
  'run',
  'start'
], {
  stdio: 'inherit',
  cwd: path.resolve(root, `demos`),
});
// shelljs.exec(`npm run build:demo && cd demos && tnpm i && npm run build && cd ..`);

