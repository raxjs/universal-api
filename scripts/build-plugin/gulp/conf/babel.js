/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = (isEs, isMain, aliasEntries) => {
  let res = {
    presets: [
      [
        "@babel/preset-env",
        {
          loose: true,
          modules: isEs ? false : "auto",
          targets: {
            browsers: ['last 2 versions', 'IOS >= 8', 'Android >= 4'],
          },
        },
      ],
      [
        "@babel/typescript",
        {
          isTSX: false,
          allExtensions: false,
          onlyRemoveTypeImports: false,
        },
      ],
    ],
    plugins: [
      [
        "module-resolver", 
        {
          resolvePath(sourcePath, currentFile, opts) {
            /**
             * The `opts` argument is the options object that is passed through the Babel config.
             * opts = {
             *   extensions: [".js"],
             *   resolvePath: ...,
             * }
             */
            // const oriUtilsPath = '@utils';
            // let newUtilsPath = '_utils';
            // let pathLv = 0;
            // if (sourcePath.indexOf(oriUtilsPath) !== -1) {
            //   if (isMain) {
            //     newUtilsPath = 'utils'
            //     pathLv = currentFile
            //       .match(/(src\/packages\/.*\.ts)/)[1]
            //       .split('/').length - 2;
            //   } else {
            //     pathLv = currentFile
            //     .replace('/src/packages', '')
            //     .match(/(src\/.*\.ts)/)[1]
            //     .split('/').length - 2;
            //   }
              
            //   const pointRelative = pathLv === 0 ? '.' : Array.from({length: pathLv}).map(i => '..').join('/');
            
            //   return sourcePath.replace(oriUtilsPath, pointRelative + '/' + newUtilsPath);
            // }

            // 替换内部依赖，加入index.js
            
            if (!isMain && sourcePath.indexOf('.js') == -1) {
              const _oriPackagesPath = /@uni\/.*?\/(lib|es|dist)\/.*?\/.+/;
              if (sourcePath.match(_oriPackagesPath)) {
                return sourcePath + '.js';
              }
              const _oriPackagesPath2 = /^@uni\/.*?\/(lib|es|dist)\/[^\/]+$/;
              if (sourcePath.match(_oriPackagesPath2)) {
                return sourcePath + '/index.js';
              }
            }
            

            // 替换主包依赖为内联
            let res = sourcePath;
            const oriPackagesPath = '@uni/';
            if (isMain && sourcePath.indexOf(oriPackagesPath) !== -1) {
              const pathLv = currentFile.replace(/.*?\/src\/packages\//).split('/').length - 1;
              const pointRelative = pathLv === 0 ? '.' : Array.from({length: pathLv}).map(i => '..').join('/');
              
              aliasEntries.some(item => {
                if (sourcePath.indexOf(item.find) !== -1) {
                  res = sourcePath.replace(item.find, pointRelative + '/' + item.replacement);
                  return true;
                }
                return false;
              });
              
            }
            return res;
          }
        }
      ],
      [
        "@babel/plugin-proposal-class-properties",
        {
          loose: true,
        },
      ],
      [
        "@babel/plugin-transform-runtime",
        {
          regenerator: false,
          useESModules: isEs,
          corejs: false,
          helpers: false,
        },
      ],
    ],
  };
  return res;
};
