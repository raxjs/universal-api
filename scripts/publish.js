const sourceMap = require('../api-config');
const shell = require('shelljs');
const path = require('path');

const root = process.cwd();
const outputDir = 'dist/';
const getItemOutputPath = (name, dir = 'lib/') => outputDir + dir + name + '/';
const resShell = [];
const apiName = process.argv[2];
const isBeta = process.env.BUILD_TAG === 'beta';
let publishType = 'npm';
// if (process.env.PUBLISH_TYPE === "npm") {
//   publishType = "npm";
// } else {
//   publishType = "tnpm";
// }
const mainPublishFun = () => {
  resShell.push(`cd ${path.resolve(root, outputDir + 'main')} && ${publishType} publish ${isBeta ? '--tag beta' : ''} && cd ..`);
};
const allPublishFun = () => {
  Object.entries(sourceMap).map(([key, value]) => {
    value.pkgInfo.forEach(i => {
      const relativeOutputPath = getItemOutputPath(i.name);

      resShell.push(`cd ${path.resolve(root, relativeOutputPath)} && ${publishType} publish ${isBeta ? '--tag beta' : ''} && cd ..`);
    });
    
  });
};
if (apiName) {
  sourceMap[apiName].pkgInfo.forEach(i => {
    const relativeOutputPath = getItemOutputPath(i.name, i.outputDir);

    resShell.push(`cd ${path.resolve(root, relativeOutputPath)} && ${publishType} publish && cd ..`);
  });
  // const relativeOutputPath = getItemOutputPath(sourceMap[apiName].pkgInfo.name, sourceMap[apiName].outputDir);

  // resShell.push(`cd ${path.resolve(root, relativeOutputPath)} && ${publishType} publish && cd ..`);
} else if (process.env.BUILD_TYPE === 'all') {
  allPublishFun();
} else if (process.env.BUILD_TYPE === 'main') {
  mainPublishFun();
} else {
  // 默认发布全部api
  // allPublishFun();
  // mainPublishFun();
}
shell.exec(resShell.join(' && '));