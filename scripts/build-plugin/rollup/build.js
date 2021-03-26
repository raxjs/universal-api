const compose = require('koa-compose');
const getRollupConfig = require('./rollupConfig');
const packageTpl = require('../source/package-tpl');

const fs = require('fs-extra');
const rm = require('rimraf');
const path = require('path');
const rollup = require('rollup');
const logger = require('../logger');
const root = process.cwd();


const compiler = async (config, packageInfo, _outputPath, isMain = false, apiInfo) => {
  const inputOptions = config[0];
  
  // const isMain = inputOptions.input.indexOf('packages/main/index.ts') !== -1;
  const tsPath = inputOptions.input.replace(/\.(t|j)s/, '.d.ts');
  const typesPath = inputOptions.input.replace("index.ts", "types.ts");
  
  // create a bundle
 
  const list = [];
  config.forEach((i) => {
    const inputOptions = i;
    const outputOptions = i.output;
    list.push(async(ctx, next) => {
      let bundle = await rollup.rollup(inputOptions);
      await bundle.generate(outputOptions);
      // or write the bundle to disk
      await bundle.write(outputOptions);
      bundle = null;
      // spinner.succeed(`编译结束 ${outputOptions.file}`);
      logger(`编译结束 ${outputOptions.file}`);
      await next();
    });
  });
  await compose(list)();
  if (apiInfo.declaration) {
    if (isMain) {
      fs.moveSync(path.resolve(root, _outputPath, 'src'), path.resolve(root, _outputPath, 'types'));
      // fs.moveSync(path.resolve(root, _outputPath, 'types/main/index.d.ts'), path.resolve(root, _outputPath, 'types'));
      // rm.sync(path.resolve(root, _outputPath, 'packages'));
    } else {
      fs.moveSync(path.resolve(root, _outputPath, tsPath.replace(root, '.')), path.resolve(root, _outputPath, 'types/index.d.ts'));
      rm.sync(path.resolve(root, _outputPath, 'packages'));
      if (fs.pathExistsSync(typesPath)) {
        fs.copyFileSync(typesPath, path.resolve(root, _outputPath, 'types/types.d.ts'));
      }
    }
  }
  
  logger(`---------- 编译结束 ${packageInfo.name} ----------`);
  // await next();
};
const release = (sourcePath, packageInfo, outputPath, sourceMap, apiInfo, isMain = false) => {
  // return async function(ctx, next) {
    const config = getRollupConfig(sourcePath, outputPath, sourceMap, packageInfo, apiInfo, isMain);
    compiler(config, packageInfo, outputPath, isMain, apiInfo);
  //   await next();
  // };
};

module.exports = release;