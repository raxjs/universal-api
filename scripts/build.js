
const shelljs = require('shelljs');
const sourceMap = require('../api-config');
const fs = require('fs-extra');

const allTask = () => {
  let shellResList = [];
  let shellRes = '';
  let res = [];
  Object.entries(sourceMap).map(([key, value]) => {
    // const sourcePath = value.path.replace(/\/src\/.*/, '');
    res.push(`npm run build ${key}`);
  });
  shellResList.push(...res);
  shellRes = shellResList.join(' && ');
  shelljs.exec(shellRes);
};

const apiName = process.argv[2];
// console.log(process.argv);

if (apiName) {
  // const sourcePath = inputPath.replace(/\/src\/.*/, '');
  shelljs.exec(`build-scripts build --api ${apiName}`);
} else if (process.env.BUILD_TYPE === 'all') {
  allTask();
} else if (process.env.BUILD_TYPE === 'main') {
  // const sourcePath = isMain ? inputPath.replace(/\/index\.(t|j)s/, '') : inputPath.replace(/\/src\/.*/, '');
  shelljs.exec(`build-scripts build --api main`);
} else {
  allTask();
}