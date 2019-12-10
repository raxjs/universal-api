'use strict';
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const glob = require('glob');
const chalk = require('chalk');
const parseArgs = require('minimist');
const chokidar = require('chokidar');

const DOCS_TEMP_DIR = 'docs-template';

const args = parseArgs(process.argv);
const customPackages = args.packages;

const fixedWidth = str => {
  const WIDTH = 80;
  const strs = str.match(new RegExp(`(.{1,${WIDTH}})`, 'g'));
  let lastString = strs[strs.length - 1];
  if (lastString.length < WIDTH) {
    lastString += Array(WIDTH - lastString.length).join(chalk.dim('.'));
  }
  return strs.slice(0, -1).concat(lastString).join('\n');
};

function buildPackage(packagesDir, packageDir) {
  let mdFileNames = [];
  try {
    mdFileNames = fs.readdirSync(path.resolve(packageDir, DOCS_TEMP_DIR));
  } catch(e) {};
  const iconArr = ['__icon_web__', '__icon_weex__', '__icon_miniapp_mp__', '__icon_miniapp_wx__'];
  const iconMap = {
    __icon_web__: '<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" />',
    __icon_weex__: '<img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" />',
    __icon_miniapp_mp__: '<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" />',
    __icon_miniapp_wx__: '<img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px">',
  };
  mdFileNames.forEach(mdFileName => {
    const mdFile = path.resolve(packageDir, DOCS_TEMP_DIR, mdFileName);
    fs.readFile(mdFile, 'utf8', function(err, data) {
      if (!data) {
        return;
      }
      process.stdout.write(
        fixedWidth(`${path.basename(packageDir)}: ${mdFileName}\n`)
      );
      iconArr.forEach(icon => {
        data = data.replace(new RegExp(`${icon}`, 'g'), iconMap[icon]);
      });
      fs.writeFileSync(path.join(packageDir, mdFileName), data, 'utf8');
      process.stdout.write(`[  ${chalk.green('OK')}  ]\n`);
    });
  });

}

function getPackages(packagesDir, customPackages) {
  return fs.readdirSync(packagesDir)
    .map(file => path.resolve(packagesDir, file))
    .filter(f => {
      if (customPackages) {
        const packageName = path.relative(packagesDir, f).split(path.sep)[0];
        return packageName.indexOf(customPackages) !== -1;
      } else {
        return true;
      }
    })
    .filter(f => fs.lstatSync(path.resolve(f)).isDirectory());
}

function compile(packagesName = 'packages') {
  const packagesDir = path.resolve(__dirname, `../${packagesName}`);

  process.stdout.write(chalk.bold.inverse('Compiling packages\n'));
  getPackages(packagesDir, customPackages).forEach(buildPackage.bind(null, packagesDir));
  process.stdout.write('\n');
}

compile();
