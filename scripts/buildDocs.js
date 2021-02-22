const path = require('path');
const rm = require('rimraf');
const sourceMap = require('../api-config');
const chalk = require('chalk');
const fs = require('fs-extra');
const root = process.cwd();
const docsOutputDir = 'docs/';

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
const buildDocs = async () => {
  const docsPath = path.resolve(root, docsOutputDir);
  const packageDocsPath = path.resolve(root, docsOutputDir, 'packages');
  const homePath = path.resolve(root, 'scripts/docsSource/home');
  const quickStartPath = path.resolve(root, 'scripts/docsSource/quickStart');
  if (!fs.pathExistsSync(docsPath)) {
    fs.mkdirSync(docsPath);
    fs.mkdirSync(path.resolve(docsPath, 'packages'));
  } else {
    rm.sync(docsPath);
    fs.mkdirSync(docsPath);
    fs.mkdirSync(path.resolve(docsPath, 'packages'));
  }
  fs.copySync(homePath, docsPath);
  fs.copySync(quickStartPath, path.resolve(packageDocsPath, 'quickStart'));
  

  Object.entries(sourceMap).map(([key, value]) => {
    const fromPath = path.resolve(root, value.path.replace(/src\/index\.(t|j)s/, 'docs'));
    const toPath = path.resolve(root, docsOutputDir, value.path.replace(/src\/index\.(t|j)s/, ''));
    if (fs.pathExistsSync(fromPath)) {
      fs.copySync(fromPath, toPath);
    }
    
  });
  logger('END', {status: 'SUCCESS'});
};


buildDocs();