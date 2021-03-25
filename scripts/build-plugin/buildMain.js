const fs = require('fs-extra');
const path = require('path');

module.exports = (rootDir, sourceMap) => {
  const indexFileContent = Object.entries(sourceMap).map(([key, value]) => {
    return `export * as ${key} from '${value.path.replace('src/packages/', '../').replace(/\.(t|j)s/, '')}';`;
  }).join('\r\n');
  const wechatFileContent = Object.entries(sourceMap).map(([key, value]) => {
    if (value.unNeedSplit) {
      return `export * as ${key} from '${value.path.replace('src/packages/', '../../').replace(/\.(t|j)s/, '')}';`;
    }
    return `export * as ${key} from '${value.path.replace('src/packages/', '../../').replace(/\/src/, '/src/wechat-miniprogram').replace(/\.(t|j)s/, '')}';`;
  }).join('\r\n');
  const aliFileContent = Object.entries(sourceMap).map(([key, value]) => {
    if (value.unNeedSplit) {
      return `export * as ${key} from '${value.path.replace('src/packages/', '../../').replace(/\.(t|j)s/, '')}';`;
    }
    return `export * as ${key} from '${value.path.replace('src/packages/', '../../').replace(/\/src/, '/src/ali-miniapp').replace(/\.(t|j)s/, '')}';`;
  }).join('\r\n');
  const byteFileContent = Object.entries(sourceMap).map(([key, value]) => {
    if (value.unNeedSplit) {
      return `export * as ${key} from '${value.path.replace('src/packages/', '../../').replace(/\.(t|j)s/, '')}';`;
    }
    return `export * as ${key} from '${value.path.replace('src/packages/', '../../').replace(/\/src/, '/src/bytedance-microapp').replace(/\.(t|j)s/, '')}';`;
  }).join('\r\n');
  const webFileContent = Object.entries(sourceMap).map(([key, value]) => {
    if (value.unNeedSplit) {
      return `export * as ${key} from '${value.path.replace('src/packages/', '../../').replace(/\.(t|j)s/, '')}';`;
    }
    return `export * as ${key} from '${value.path.replace('src/packages/', '../../').replace(/\/src/, '/src/web').replace(/\.(t|j)s/, '')}';`;
  }).join('\r\n');
  fs.writeFileSync(path.resolve(rootDir, 'src/packages/main/index.ts'), indexFileContent);
  fs.writeFileSync(path.resolve(rootDir, 'src/packages/main/wechat-miniprogram/index.ts'), wechatFileContent);
  fs.writeFileSync(path.resolve(rootDir, 'src/packages/main/ali-miniapp/index.ts'), aliFileContent);
  fs.writeFileSync(path.resolve(rootDir, 'src/packages/main/bytedance-microapp/index.ts'), byteFileContent);
  fs.writeFileSync(path.resolve(rootDir, 'src/packages/main/web/index.ts'), webFileContent);
  // taskList.push(
  //   release('packages/main/index.ts', {
  //     version: mainPkg.version,
  //     name: mainPkg.name,
  //   }, 'main/', {unNeedSplit: false}),
  // );
};