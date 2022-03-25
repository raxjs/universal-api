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
  fs.writeFileSync(path.resolve(root, outputPath, 'README.md'), docContent);
  fs.writeFileSync(path.resolve(root, outputPath, 'README.en-US.md'), docEnContent);
}

const buildPkgJson = async (packageInfo, outputPath, isMain = false) => {
  let packageJson = {
    ...packageTpl,
    ...packageInfo
  };
  if (!packageJson.exports) {
    delete packageJson.exports;
  }
  if (isMain) {
    delete packageJson.dependencies['@uni/env'];
  }
  if (packageInfo.name == '@uni/env') {
    delete packageJson.dependencies['@uni/env'];
    delete packageJson.dependencies['@uni/utils'];
  }
  if (packageInfo.name === '@uni/utils') {
    delete packageJson.dependencies['@uni/utils'];
  }
  if (isMain) {
    packageJson.typings = 'types/main/index.d.ts';
    packageJson.main = 'lib/main/index.js';
    packageJson.module = 'es/main/index.js';
    packageJson.unpkg = 'dist/main/index.js';
    packageJson.exports = {
      "web": "./es/main/web/index.js",
      "wechat-miniprogram": "./es/main/wechat-miniprogram/index.js",
      "bytedance-microapp": "./es/main/bytedance-microapp/index.js",
      // "baidu-smartprogram": "./es/main/baidu-smartprogram/index.js",
      // "kuaishou-miniprogram": "./es/main/kuaishou-miniprogram/index.js",
      "miniapp": "./es/main/ali-miniapp/index.js",
      "default": "./es/main/index.js",
    }
  }
  if (Object.keys(packageJson.dependencies).length === 0) {
    delete packageJson.dependencies;
  }
  await fs.outputJSON(path.resolve(root, outputPath + 'package.json'), packageJson);
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
    fs.mkdirsSync(outputPath);
  } else {
    rm.sync(outputPath);
    fs.mkdirsSync(outputPath);
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