const fs = require('fs-extra');
const path = require('path');

module.exports = (rootDir, sourceMap) => {
  const defaultContent = '\r\n\r\nexport default {\r\n' + Object.entries(sourceMap).map(([key, value]) => {
    return `  ${key},`;
  }).join('\r\n') + '\r\n};\r\n';
  const exportContent = '\r\n\r\nexport {\r\n' + Object.entries(sourceMap).map(([key, value]) => {
    return `  ${key},`;
  }).join('\r\n') + '\r\n};\r\n';
  const indexFileContent = Object.entries(sourceMap).map(([key, value]) => {
    return `import ${key} from '${value.path.replace('src/packages/', '../packages/').replace(/\.(t|j)s/, '')}';`;
  }).join('\r\n');
  const wechatFileContent = Object.entries(sourceMap).map(([key, value]) => {
    if (value.unNeedSplit) {
      return `import ${key} from '${value.path.replace('src/packages/', '../../packages/').replace(/\.(t|j)s/, '')}';`;
    }
    return `import ${key} from '${value.path.replace('src/packages/', '../../packages/').replace(/\/src/, '/src/wechat-miniprogram').replace(/\.(t|j)s/, '')}';`;
  }).join('\r\n');
  const aliFileContent = Object.entries(sourceMap).map(([key, value]) => {
    if (value.unNeedSplit) {
      return `import ${key} from '${value.path.replace('src/packages/', '../../packages/').replace(/\.(t|j)s/, '')}';`;
    }
    return `import ${key} from '${value.path.replace('src/packages/', '../../packages/').replace(/\/src/, '/src/ali-miniapp').replace(/\.(t|j)s/, '')}';`;
  }).join('\r\n');
  const byteFileContent = Object.entries(sourceMap).map(([key, value]) => {
    if (value.unNeedSplit) {
      return `import ${key} from '${value.path.replace('src/packages/', '../../packages/').replace(/\.(t|j)s/, '')}';`;
    }
    return `import ${key} from '${value.path.replace('src/packages/', '../../packages/').replace(/\/src/, '/src/bytedance-microapp').replace(/\.(t|j)s/, '')}';`;
  }).join('\r\n');
  const webFileContent = Object.entries(sourceMap).map(([key, value]) => {
    if (value.unNeedSplit) {
      return `import ${key} from '${value.path.replace('src/packages/', '../../packages/').replace(/\.(t|j)s/, '')}';`;
    }
    return `import ${key} from '${value.path.replace('src/packages/', '../../packages/').replace(/\/src/, '/src/web').replace(/\.(t|j)s/, '')}';`;
  }).join('\r\n');
  fs.writeFileSync(path.resolve(rootDir, 'src/main/index.ts'), indexFileContent + exportContent + defaultContent);
  fs.writeFileSync(path.resolve(rootDir, 'src/main/wechat-miniprogram/index.ts'), wechatFileContent + exportContent + defaultContent);
  fs.writeFileSync(path.resolve(rootDir, 'src/main/ali-miniapp/index.ts'), aliFileContent + exportContent + defaultContent);
  fs.writeFileSync(path.resolve(rootDir, 'src/main/bytedance-microapp/index.ts'), byteFileContent + exportContent + defaultContent);
  fs.writeFileSync(path.resolve(rootDir, 'src/main/web/index.ts'), webFileContent + exportContent + defaultContent);
  // taskList.push(
  //   release('packages/main/index.ts', {
  //     version: mainPkg.version,
  //     name: mainPkg.name,
  //   }, 'main/', {unNeedSplit: false}),
  // );
};

// const fs = require('fs-extra');
// const path = require('path');

// module.exports = (rootDir, sourceMap) => {
//   const indexFileContent = Object.entries(sourceMap).map(([key, value]) => {
//     return `export * as ${key} from '${value.path.replace('src/packages/', '../packages/').replace(/\.(t|j)s/, '')}';`;
//   }).join('\r\n');
//   const wechatFileContent = Object.entries(sourceMap).map(([key, value]) => {
//     if (value.unNeedSplit) {
//       return `export * as ${key} from '${value.path.replace('src/packages/', '../../packages/').replace(/\.(t|j)s/, '')}';`;
//     }
//     return `export * as ${key} from '${value.path.replace('src/packages/', '../../packages/').replace(/\/src/, '/src/wechat-miniprogram').replace(/\.(t|j)s/, '')}';`;
//   }).join('\r\n');
//   const aliFileContent = Object.entries(sourceMap).map(([key, value]) => {
//     if (value.unNeedSplit) {
//       return `export * as ${key} from '${value.path.replace('src/packages/', '../../packages/').replace(/\.(t|j)s/, '')}';`;
//     }
//     return `export * as ${key} from '${value.path.replace('src/packages/', '../../packages/').replace(/\/src/, '/src/ali-miniapp').replace(/\.(t|j)s/, '')}';`;
//   }).join('\r\n');
//   const byteFileContent = Object.entries(sourceMap).map(([key, value]) => {
//     if (value.unNeedSplit) {
//       return `export * as ${key} from '${value.path.replace('src/packages/', '../../packages/').replace(/\.(t|j)s/, '')}';`;
//     }
//     return `export * as ${key} from '${value.path.replace('src/packages/', '../../packages/').replace(/\/src/, '/src/bytedance-microapp').replace(/\.(t|j)s/, '')}';`;
//   }).join('\r\n');
//   const webFileContent = Object.entries(sourceMap).map(([key, value]) => {
//     if (value.unNeedSplit) {
//       return `export * as ${key} from '${value.path.replace('src/packages/', '../../packages/').replace(/\.(t|j)s/, '')}';`;
//     }
//     return `export * as ${key} from '${value.path.replace('src/packages/', '../../packages/').replace(/\/src/, '/src/web').replace(/\.(t|j)s/, '')}';`;
//   }).join('\r\n');
//   fs.writeFileSync(path.resolve(rootDir, 'src/main/index.ts'), indexFileContent);
//   fs.writeFileSync(path.resolve(rootDir, 'src/main/wechat-miniprogram/index.ts'), wechatFileContent);
//   fs.writeFileSync(path.resolve(rootDir, 'src/main/ali-miniapp/index.ts'), aliFileContent);
//   fs.writeFileSync(path.resolve(rootDir, 'src/main/bytedance-microapp/index.ts'), byteFileContent);
//   fs.writeFileSync(path.resolve(rootDir, 'src/main/web/index.ts'), webFileContent);
  // taskList.push(
  //   release('packages/main/index.ts', {
  //     version: mainPkg.version,
  //     name: mainPkg.name,
  //   }, 'main/', {unNeedSplit: false}),
  // );
// };