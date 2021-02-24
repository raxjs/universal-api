const path = require('path');
const rm = require('rimraf');
// import filesize from 'rollup-plugin-filesize';
const sourceMap = require('../api-config');
const compose = require('koa-compose');
const chalk = require('chalk');
const fs = require('fs-extra');

const root = process.cwd();
const outputDir = 'dist/lib/';
const demoOutputDir = 'demos/';
// const getItemOutputPath = (name, dir = 'lib/') => dir + name + '/';
// console.log('commonjs', commonjs);
function logger( text = '', opts = { status: 'INFO' } ) {
  let logText = '';
  switch ( opts.status) {
    case 'SUCCESS':
      logText = `${chalk.bgGreen('[SUCCESS]')} ${chalk.green(text)}`;
      break;
    case 'WARN':
      logText = `${chalk.bgYellow('[WARN]')} ${chalk.yellow(text)}`;
      break;
    case 'ERROR':
      logText = `${chalk.bgRed('[ERROR]')} ${chalk.red(text)}`;
      break;
    default:
      logText = `${chalk.bgBlue('[INFO]')} ${chalk.white(text)}`;
      break;
  }
  console.log(logText);
}
const buildDemo = async () => {
  const demoPath = path.resolve(root, demoOutputDir);
  // fs.mkdirSync(path.resolve(demoPath, 'src'));
  if (!fs.pathExistsSync(demoPath)) {
    fs.mkdirSync(demoPath);
    fs.mkdirSync(path.resolve(demoPath, 'src'));
  } else {
    rm.sync(demoPath);
    fs.mkdirSync(demoPath);
    fs.mkdirSync(path.resolve(demoPath, 'src'));
  }
  
  const appJsonContent = require(path.resolve(root, 'scripts/demosSource/src/app.json'));
  const packageContent = require(path.resolve(root, 'scripts/demosSource/demo-package-tpl.js'));
  if (!fs.pathExistsSync(path.resolve(demoPath, 'src/pages'))) {
    fs.mkdirSync(path.resolve(demoPath, 'src/pages'));
  }
  // if (!fs.pathExistsSync(path.resolve(demoPath, 'src/pages'))) {
  //   fs.mkdirSync(path.resolve(demoPath, 'src/pages'));
  // }
  
  // copydemo 文件
  Object.entries(sourceMap).map(([key, value]) => {
    const fromPath = path.resolve(root, value.path.replace(/src\/index\.(t|j)s/, 'demo/index.tsx'));
    value.pkgInfo.forEach(i => {
      // console.log(fromPath);
      const outputPath = path.resolve(root, demoOutputDir, 'src/pages', i.name.replace('@uni/', ''));
      if (fs.pathExistsSync(fromPath)) {
        if (!fs.pathExistsSync(outputPath)) {
          fs.mkdirSync(outputPath);
        }
        
        fs.copyFileSync(fromPath, path.resolve(root, outputPath, 'index.tsx'));
        appJsonContent.routes.push({
          "path": `/pages/${i.name.replace('@uni/', '')}/index`,
          "source": `pages/${i.name.replace('@uni/', '')}/index`,
          "window": {
            "title": i.name.replace('@uni/', '')
          }
        });
      }
      packageContent.dependencies[i.name] = path.resolve(root, outputDir, i.name);
    });
    
    // res.push(`npm run build ${key}`);
    // taskList.push(...getConfList(key));
  });
  // fs.mkdirSync(path.resolve(demoPath, 'src/pages'));
  await fs.outputJSON(path.resolve(root, demoPath, 'package.json'), packageContent);
  await fs.outputJSON(path.resolve(root, demoPath, 'src/app.json'), appJsonContent);
  fs.copyFileSync(path.resolve(root, 'scripts/demosSource/src/app.js'), path.resolve(demoPath, 'src/app.js'));
  // fs.copyFileSync(path.resolve(root, 'scripts/demos/src/app.json'), path.resolve(demoPath, 'src/app.js'));
  if (!fs.pathExistsSync(path.resolve(demoPath, 'src/pages/Home'))) {
    fs.mkdirSync(path.resolve(demoPath, 'src/pages/Home'));
  }
  fs.copyFileSync(path.resolve(root, 'scripts/demosSource/src/pages/index.tsx'), path.resolve(demoPath, 'src/pages/Home/index.tsx'));
  fs.copyFileSync(path.resolve(root, 'scripts/demosSource/build.json'), path.resolve(demoPath, 'build.json'));
  fs.copyFileSync(path.resolve(root, 'scripts/demosSource/herbox.json'), path.resolve(demoPath, 'herbox.json'));
  fs.copyFileSync(path.resolve(root, 'scripts/demosSource/herbox.js'), path.resolve(demoPath, 'herbox.js'));
  // shellResList.push(...res);
  // shellRes = res.join(' && ');
  logger('END', {status: 'SUCCESS'});
};


buildDemo();