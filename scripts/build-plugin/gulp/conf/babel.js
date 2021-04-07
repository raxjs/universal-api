/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = (isEs, isMain) => {
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
            const oriUtilsPath = '@utils';
            let newUtilsPath = '_utils';
            let pathLv = 0;
            if (sourcePath.indexOf(oriUtilsPath) !== -1) {
              if (isMain) {
                newUtilsPath = 'utils'
                pathLv = currentFile
                  .match(/(src\/packages\/.*\.ts)/)[1]
                  .split('/').length - 2;
              } else {
                pathLv = currentFile
                .replace('/src/packages', '')
                .match(/(src\/.*\.ts)/)[1]
                .split('/').length - 2;
              }
              
              const pointRelative = pathLv === 0 ? '.' : Array.from({length: pathLv}).map(i => '..').join('/');
            
              return sourcePath.replace(oriUtilsPath, pointRelative + '/' + newUtilsPath);
            }
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
          useESModules: isEs,
          corejs: 3,
          helpers: !isEs,
        },
      ],
    ],
  };
  return res;
};
