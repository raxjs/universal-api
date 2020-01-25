'use strict';
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const glob = require('glob');
const chalk = require('chalk');
const parseArgs = require('minimist');
const chokidar = require('chokidar');

const SRC_DIR = 'src';
const BUILD_DIR = 'lib';
const JS_FILES_PATTERN = '**/*.js';
const IGNORE_PATTERN = '**/{__tests__,__mocks__}/**';

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
  const srcDir = path.resolve(packageDir, SRC_DIR);

  process.stdout.write(
    fixedWidth(`${path.basename(packageDir)}\n`)
  );
  spawnSync('npm', ['run', 'build'], {
    cwd: packageDir
  });
  process.stdout.write(`[  ${chalk.green('OK')}  ]\n`);
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

module.exports = function compile(packagesName = 'packages') {
  const packagesDir = path.resolve(__dirname, `../${packagesName}`);

  if (args.watch) {
    // watch packages
    const packages = getPackages(packagesDir, customPackages);
    const watchPackagesDir = packages.map(dir => path.resolve(dir, SRC_DIR));

    console.log(chalk.green('watch packages compile', packages));

    chokidar.watch(watchPackagesDir, {
      ignored: IGNORE_PATTERN
    }).on('change', (filePath) => {
      const packageName = filePath.match( new RegExp(`\/${packagesName}\/([^\/]*)`))[1];
      const packagePath = path.resolve(__dirname, `../${packagesName}/`, packageName);
      process.stdout.write(chalk.bold.inverse(`Compiling package ${packageName} \n`));
      try {
        buildPackage(packagesDir, packagePath);
      } catch (e) {}
      process.stdout.write('\n');
    });
  } else {
    process.stdout.write(chalk.bold.inverse('Compiling packages\n'));
    getPackages(packagesDir, customPackages).forEach(buildPackage.bind(null, packagesDir));
    process.stdout.write('\n');
  }
};

// spawnSync('mkdir', ['-p', '/Users/balloon/Desktop/workSpace/raxjs/universal-api/packages/universal-network-type/dist']);