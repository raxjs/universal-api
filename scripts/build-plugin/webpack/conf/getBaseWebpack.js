const webpack = require('webpack');
const path = require('path');
const Chain = require('webpack-chain');
const { getBabelConfig, setBabelAlias } = require('rax-compile-config');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const babelConfig = getBabelConfig({
  styleSheet: false,
  disableJSXPlus: true,
  custom: {
    ignore: ['**/**/*.d.ts'],
  },
});
babelConfig.presets.push([
  '@babel/typescript',
  {
    isTSX: false,
    allExtensions: true,
    // onlyRemoveTypeImports: true,
  }
]);
// console.log('babelConfig', babelConfig);
module.exports = (context, options = {}) => {
  const { rootDir, command, pkg } = context;
  const {isMain} = options;
  const config = new Chain();

  setBabelAlias(config);

  config.context(rootDir);

  config.externals([
    function (ctx, request, callback) {
      if (request.indexOf('@weex-module') !== -1) {
        return callback(null, `commonjs ${request}`);
      }
      // Built-in modules in QuickApp
      if (request.indexOf('@system') !== -1) {
        return callback(null, `commonjs ${request}`);
      }
      callback();
    },
    // nodeExternals()
  ]);

  config.resolve.extensions.merge([
    '.js',
    '.json',
    '.jsx',
    '.ts',
    '.tsx',
    '.html',
  ]);

  config.module
    .rule('jsx')
    .test(/\.(js|mjs|jsx)$/)
    //.exclude.add(/node_modules/)
    //.end()
    .use('babel')
    .loader(require.resolve('babel-loader'))
    .options(babelConfig);

  config.module
    .rule('tsx')
    .test(/\.tsx?$/)
    .use('babel')
    .loader(require.resolve('babel-loader'))
    .options(babelConfig)
    .end();
    // .use('ts')
    // .loader(require.resolve('ts-loader'));

  config.plugin('caseSensitivePaths').use(CaseSensitivePathsPlugin);

  config.plugin('noError').use(webpack.NoEmitOnErrorsPlugin);


  config.mode('production');
// config.optimization
//     .minimize = false;
  config.optimization
    .minimizer('terser')
    .use(TerserPlugin, [
      {
        terserOptions: {
          output: {
            comments: false,
          },
        },
        extractComments: false,
      },
    ])
    .end();

  return config;
};
