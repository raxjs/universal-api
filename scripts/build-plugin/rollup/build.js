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
  const npmrcPath = path.resolve(root, ".npmrc");
  const _docPath = isMain ? root : inputOptions.input.replace(/\/src\/.*/, "/docs");
  if (apiInfo.mvReadme) {
    let docPath;
    let enDocPath;
    if (isMain) {
      docPath = path.resolve(root, 'README.md');
      enDocPath = path.resolve(root, 'README.en-US.md');
    } else {
      docPath = fs.pathExistsSync(_docPath + '/README.md') ? _docPath + '/README.md' : _docPath + '/README.md.c';
      enDocPath = fs.pathExistsSync(_docPath + '/README.en-US.md') ? 
      _docPath + '/README.en-US.md' : _docPath + '/README.en-US.md.c';
    }
    let docContent = fs.readFileSync(docPath, {encoding: 'utf8'}).replace(/---(\r\n|\r|\n)(\r\n|\r|\n|.)+?---(\r\n|\r|\n)/, '').replace(/```jsx \| inline(\r\n|\r|\n|.)*```/, '');
    let docEnContent = fs.readFileSync(enDocPath, {encoding: 'utf8'}).replace(/---(\r\n|\r|\n)(\r\n|\r|\n|.)+?---(\r\n|\r|\n)/, '').replace(/```jsx \| inline(\r\n|\r|\n|.)*```/, '');
    fs.writeFileSync(path.resolve(root, _outputPath, 'README.md'), docContent);
    fs.writeFileSync(path.resolve(root, _outputPath, 'README.en-US.md'), docEnContent);
  }

  if (apiInfo.buildPkgJson) {
    // 写入当前组件包的依赖
    packageTpl.version = packageInfo.version;
    packageTpl.name = packageInfo.name;
    if (process.env.NPM_TYPE === 'prod') {
      packageTpl.dependencies = {...packageTpl.peerDependencies, ...packageInfo.dependencies};
      delete packageTpl.peerDependencies;
      if (isMain || packageInfo.name == '@uni/env') {
        delete packageTpl.dependencies['@uni/env'];
      }
    } else {
      packageTpl.peerDependencies = {...packageTpl.peerDependencies, ...packageInfo.dependencies};
      if (isMain || packageInfo.name == '@uni/env') {
        delete packageTpl.peerDependencies['@uni/env'];
      }
    }
  
    // packageTpl.dependencies[componentPackage.name] = path.relative(distDir, root) + '/';
    await fs.outputJSON(path.resolve(root, _outputPath + 'package.json'), packageTpl);
  }
  if (apiInfo.mvNpmrc) {
    fs.copyFileSync(npmrcPath, path.resolve(root, _outputPath, '.npmrc'));
  }
  
  if (apiInfo.declaration && packageInfo.dependencies) {
    Object.keys(packageInfo.dependencies).forEach(name => {
      const filePath = path.resolve(root, `types/${name}.d.ts`);
      if (!fs.pathExistsSync(filePath)) {
        const DTSFileContent = `declare module '${name}';`;
        fs.writeFileSync(filePath, DTSFileContent);
      }
    });
  }
  
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
      fs.moveSync(path.resolve(root, _outputPath, 'packages'), path.resolve(root, _outputPath, 'types'));
      // rm.sync(path.resolve(root, _outputPath, 'packages'));
    } else {
      fs.moveSync(path.resolve(root, _outputPath, tsPath.replace(root, '.')), path.resolve(root, _outputPath, 'types/index.d.ts'));
      rm.sync(path.resolve(root, _outputPath, 'packages'));
      if (fs.pathExistsSync(typesPath)) {
        fs.copyFileSync(typesPath, path.resolve(root, _outputPath, 'types/types.d.ts'));
      }
    }
  }
  
  // await bundle.generate(outputOptions);
  // // or write the bundle to disk
  // await bundle.write(outputOptions);
  // spinner.succeed(`编译结束`);
  logger(`---------- 编译结束 ${packageInfo.name} ----------`);
  // await next();
};
const release = (sourcePath, packageInfo, outputPath, sourceMap, apiInfo, isMain = false) => {
  return async function(ctx, next) {
    const config = getRollupConfig(sourcePath, outputPath, sourceMap, packageInfo, apiInfo, isMain);
    // const _outputPath = outputDir + outputPath;
    // const inputOptions = config[0];
    // const tsPath = inputOptions.input.replace(/\.(t|j)s/, '.d.ts');
    // const isMain = inputOptions.input.indexOf('packages/index.ts') !== -1;
    // const typesPath = path.resolve(root, inputOptions.input.replace("index.ts", "types.ts"));
    // rm.sync(path.resolve(root, outputPath));
    await compiler(config, packageInfo, outputPath, isMain, apiInfo);
    // await compiler(config[1], packageInfo, _outputPath);
    // await compiler(config[2], packageInfo, _outputPath);
    
    await next();
  };
};

module.exports = release;