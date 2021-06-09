const path = require('path');
const { spawnSync } = require('child_process');

const root = process.cwd();
console.log(`开始构建demo`);

spawnSync('npm', [
  'run',
  'build'
], {
  stdio: 'inherit',
  cwd: path.resolve(root, `demos`),
});
