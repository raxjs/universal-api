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

// 注入文件的内容
const injectScript = '\n\n```jsx | inline' + `
  import React from 'react';
  export default class Home extends React.Component {
    componentDidMount() {
      if (location.search.split(/[?&]/).some(i => i === 'clear=1')) {
        document.querySelector('.__dumi-default-navbar').style.display = 'none';
        document.querySelector('.__dumi-default-layout').classList = [];
        document.querySelector('.__dumi-default-menu').style.display = 'none';
        document.querySelector('.__dumi-default-layout-toc').style.display = 'none';
        document.querySelector('.__dumi-default-layout-content').querySelector('.markdown').querySelector('h1').style.marginTop = 0;
        parent.postMessage && parent.postMessage(parent.postMessage({ event: 'syncIframeHeight', height: document.querySelector('.__dumi-default-layout-content').offsetHeight }, '*'));
      }
    }

    render() {
      return null;
    }
  }
` + '```\n';

// 注入文件脚本
const injectFile = (dir, done = () => {}) => {
  let results = [];
  fs.readdir(dir, (err, list) => {
    if (err) return done(err);
    let i = 0;
    (function next() {
      let file = list[i++];
      if (!file) return done(null, results);
      file = path.resolve(dir, file);
      fs.stat(file, (err, stat) => {
        if (stat && stat.isDirectory()) {
          injectFile(file, (err, res) => {
            results = results.concat(res);
            next();
          });
        } else {
          fs.appendFileSync(file, injectScript);
          results.push(file);
          next();
        }
      });
    })();
  });
};

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
    const toPath = path.resolve(root, docsOutputDir, value.path.replace(/src\/packages/, 'packages').replace(/src\/index\.(t|j)s/, ''));
    if (fs.pathExistsSync(fromPath)) {
      fs.copySync(fromPath, toPath);
      injectFile(toPath);
    }
    
  });
  logger('END', {status: 'SUCCESS'});
};


buildDocs();
