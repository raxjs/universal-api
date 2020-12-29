const path = require('path');
const rollup = require('rollup');
const mainPkg = require('../package.json');
const rm = require('rimraf');
const getRollupConfig = require('./rollupConfig');
// import filesize from 'rollup-plugin-filesize';
const sourceMap = require('../api-config');
const packageTpl = require('./source/package-tpl');
const compose = require('koa-compose');
const chalk = require('chalk');
const fs = require('fs-extra');
// const buildDTS = require('./buildDTS');
const shelljs = require('shelljs');
const ora = require('ora');
const child_process = require('child_process');

const root = process.cwd();
const outputDir = 'dist/lib/';
const mainOutputDir = 'dist/';
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
const allTask = async () => {
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
  
  const appJsonContent = require(path.resolve(root, 'scripts/source/demosSource/src/app.json'));
  const packageContent = require(path.resolve(root, 'scripts/source/demosSource/demo-package-tpl.js'));
  if (!fs.pathExistsSync(path.resolve(demoPath, 'src/pages'))) {
    fs.mkdirSync(path.resolve(demoPath, 'src/pages'));
  }
  
  // copydemo 文件
  Object.entries(sourceMap).map(([key, value]) => {
    const fromPath = path.resolve(root, value.path.replace(/src\/index\.(t|j)s/, 'demo/index.tsx'));
    value.pkgInfo.forEach(i => {
      // console.log(fromPath);
      const outputPath = path.resolve(root, demoOutputDir, 'src/pages', i.name);
      if (fs.pathExistsSync(fromPath)) {
        if (!fs.pathExistsSync(outputPath)) {
          fs.mkdirSync(outputPath);
        }
        
        fs.copyFileSync(fromPath, path.resolve(root, outputPath, 'index.tsx'));
        appJsonContent.routes.push({
          "path": i.name,
          "source": `pages/${i.name}/index`,
          "window": {
            "title": i.name
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
  fs.copyFileSync(path.resolve(root, 'scripts/source/demosSource/src/app.js'), path.resolve(demoPath, 'src/app.js'));
  // fs.copyFileSync(path.resolve(root, 'scripts/demos/src/app.json'), path.resolve(demoPath, 'src/app.js'));
  if (!fs.pathExistsSync(path.resolve(demoPath, 'src/pages/Home'))) {
    fs.mkdirSync(path.resolve(demoPath, 'src/pages/Home'));
  }
  fs.copyFileSync(path.resolve(root, 'scripts/source/demosSource/src/pages/index.tsx'), path.resolve(demoPath, 'src/pages/Home/index.tsx'));
  fs.copyFileSync(path.resolve(root, 'scripts/source/demosSource/build.json'), path.resolve(demoPath, 'build.json'));
  fs.copyFileSync(path.resolve(root, 'scripts/source/demosSource/herbox.json'), path.resolve(demoPath, 'herbox.json'));
  fs.copyFileSync(path.resolve(root, 'scripts/source/demosSource/herbox.js'), path.resolve(demoPath, 'herbox.js'));
  // shellResList.push(...res);
  // shellRes = res.join(' && ');
  logger('END', {status: 'SUCCESS'});
};


const mainTask = () => {
  // const buildDts = async (ctx, next) => {
  //   // buildDTS(Object.entries(sourceMap).map(([key, value]) => value.path), path.resolve(root, outputDir, 'main'));
  //   await next();
  // };
  
  const indexFileContent = Object.entries(sourceMap).map(([key, value]) => {
    return `export * as ${key} from '${value.path.replace('packages/', './').replace(/\.(t|j)s/, '')}';`;
  }).join('\r\n');
  fs.writeFileSync('packages/index.ts', indexFileContent);
  taskList.push(
    release('packages/index.ts', {
      version: mainPkg.version,
      name: mainPkg.name,
    }, 'main/')
  );
};
allTask();
// let shellRes = '';
// const apiName = process.argv[2];

// if (apiName) {
  
//   taskList = getConfList(apiName);
//   compose(taskList)().then(function() {
//     // logger('END', {status: 'SUCCESS'});
//   }).catch(function(err) {
//     console.log(err);
//   });
// } else if (process.env.BUILD_TYPE === 'all') {
//   allTask();
// } else if (process.env.BUILD_TYPE === 'main') {
//   mainTask();
//   compose(taskList)().then(function() {
//     // logger('END', {status: 'SUCCESS'});
//   }).catch(function(err) {
//     console.log(err);
//   });
// } else {
//   let res = [];
//   Object.entries(sourceMap).map(([key, value]) => {
//     res.push(`npm run build ${key}`);
//     // taskList.push(...getConfList(key));
//   });
//   shellRes = res.join(' && ');
//   shellRes += ' && npm run build:main';
//   shelljs.exec(shellRes);
//   // 默认构建全部api
//   // allTask();
//   // mainTask();
// }
