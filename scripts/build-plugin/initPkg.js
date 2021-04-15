const packageTpl = require('./source/package-tpl');

const fs = require('fs-extra');
const rm = require('rimraf');
const path = require('path');
const root = process.cwd();

const buildDoc = async (entry, isMain, outputPath) => {
  const _docPath = isMain ? root : entry.replace(/\/src\/index.(j|t)s/, "/docs");
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
  // console.log(isMain,docPath, path.resolve(root, outputPath, 'README.md'))
  fs.writeFileSync(path.resolve(root, outputPath, 'README.md'), docContent);
  fs.writeFileSync(path.resolve(root, outputPath, 'README.en-US.md'), docEnContent);
}

const buildPkgJson = async (packageInfo, outputPath, isMain = false) => {
  packageTpl.version = packageInfo.version;
  packageTpl.name = packageInfo.name;
  packageTpl.dependencies = {...packageTpl.peerDependencies, ...packageTpl.dependencies, ...packageInfo.dependencies};
  delete packageTpl.peerDependencies;
  if (isMain || packageInfo.name == '@uni/env') {
    delete packageTpl.dependencies['@uni/env'];
  }
  if (isMain) {
    packageTpl.typings = 'types/packages/main/index.d.ts';
  }
  // packageTpl.dependencies[componentPackage.name] = path.relative(distDir, root) + '/';
  await fs.outputJSON(path.resolve(root, outputPath + 'package.json'), packageTpl);
}

const buildDeclaration = async (packageInfo) => {
  Object.keys(packageInfo.dependencies).forEach(name => {
    const filePath = path.resolve(root, `types/${name}.d.ts`);
    if (!fs.pathExistsSync(filePath)) {
      const DTSFileContent = `declare module '${name}';`;
      fs.writeFileSync(filePath, DTSFileContent);
    }
  });
}

module.exports = async function(entry, packageInfo, outputPath, sourceMap, apiInfo, isMain = false) {
  if (!fs.pathExistsSync(outputPath)) {
    fs.mkdirSync(outputPath);
  } else {
    rm.sync(outputPath);
    fs.mkdirSync(outputPath);
  }
  if (apiInfo.mvReadme) {
    await buildDoc(entry, isMain, outputPath);
  }
  if (apiInfo.buildPkgJson) {
    await buildPkgJson(packageInfo, outputPath, isMain);
  }
  if (apiInfo.declaration && packageInfo.dependencies) {
    await buildDeclaration(packageInfo);
  }
};;