const path = require('path');
const apiConfig = require('../../api-config.js');
const buildDemo = require('./buildDemo.js');
const { spawnSync } = require('child_process');

const root = process.cwd();
console.log(`开始构建demo`);

buildDemo().then(() => {
  spawnSync('npm', [
    'i',
    '--registry https://registry.npm.taobao.org'
  ], {
    stdio: 'inherit',
    cwd: path.resolve(root, `demos`),
  });
  Object.entries(apiConfig).map(([key, value]) => {
    value.pkgInfo.forEach(i => {
      spawnSync('npm', [
        'link',
        '--no-audit',
        i.name
      ], {
        stdio: 'inherit',
        cwd: path.resolve(root, `demos`),
      });
    })
  });
  process.exit();
});
// spawnSync('npm', [
//   'run',
//   'build:demo'
// ], {
//   stdio: 'inherit',
//   cwd: path.resolve(root, `./`),
// });
