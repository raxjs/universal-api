'use strict';
const fs = require('fs');
const path = require('path');

const chalk = require('chalk');
const parseArgs = require('minimist');

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
  } catch (e) {};
  const iconArr = ['__icon_web__', '__icon_weex__', '__icon_miniapp_mp__', '__icon_miniapp_wx__', '__icon_microapp_tt__', '__icon_quick_app__', '__icon_smartprogram_bd__', '__icon_miniprogram_ks__'];
  const iconMap = {
    __icon_web__: '<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" />',
    __icon_weex__: '<img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" />',
    __icon_miniapp_mp__: '<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" />',
    __icon_miniapp_wx__: '<img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px">',
    __icon_microapp_tt__: '<img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">',
    __icon_quick_app__: '<img alt="quickApp" src="https://gw.alicdn.com/tfs/TB1MP7EwQT2gK0jSZPcXXcKkpXa-200-200.svg" width="25px" height="25px">',
    __icon_smartprogram_bd__: '<img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序">',
    __icon_miniprogram_ks__: ' <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序">'
  };
  mdFileNames.forEach(mdFileName => {
    let mdFile = path.resolve(packageDir, DOCS_TEMP_DIR, mdFileName);
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
