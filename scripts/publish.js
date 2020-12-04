const sourceMap = require('../api-config');
const shell = require('shelljs');

const root = process.cwd();
const outputDir = 'dist/';
const getItemOutputPath = (name, dir = 'lib/') => outputDir + dir + name + '/';
const resShell = [];
const apiName = process.argv[2];
let publishType = 'npm';
// if (process.env.PUBLISH_TYPE === "npm") {
//   publishType = "npm";
// } else {
//   publishType = "tnpm";
// }
const mainPublishFun = () => {
  resShell.push(`cd ${path.resolve(root, outputDir + 'main')} && ${publishType} publish && cd ..`);
};
const allPublishFun = () => {
  Object.entries(sourceMap).map(([key, value]) => {
    const relativeOutputPath = getItemOutputPath(value.pkgInfo.name, value.outputDir);

    resShell.push(`cd ${path.resolve(root, relativeOutputPath)} && ${publishType} publish && cd ..`);
  });
};
if (apiName) {
  const relativeOutputPath = getItemOutputPath(sourceMap[apiName].pkgInfo.name, sourceMap[apiName].outputDir);

  resShell.push(`cd ${path.resolve(root, relativeOutputPath)} && ${publishType} publish && cd ..`);
} else if (process.env.BUILD_TYPE === 'all') {
  allPublishFun();
} else if (process.env.BUILD_TYPE === 'main') {
  mainPublishFun();
} else {
  // 默认发布全部api
  allPublishFun();
  mainPublishFun();
}
shell.exec(resShell.join(' && '));

// compose(taskList)().then(function(){
//   logger('END', {status: 'SUCCESS'});
// }).catch(function(err){
//   console.log(err);
// });