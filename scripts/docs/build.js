const chokidar = require('chokidar');
const md5 = require('md5');
const fs = require('fs');
const path = require('path');
const { initDocs } = require('./buildDocs');
const { spawnSync, spawn } = require('child_process');

const root = process.cwd();
console.log(`开始构建docs`);
initDocs().then(() => {
  console.log(`开始执行dumi构建文档`);
  spawnSync('dumi', [
    'build',
  ], {
    stdio: 'inherit',
    cwd: path.resolve(root, `./`),
  });
});
