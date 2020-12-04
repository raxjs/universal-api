module.exports = (api) => {
  api.cache(false);
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          targets: {
            browsers: '> 0.25%, not dead',
          },
        },
      ],
      // [
      //   '@babel/preset-react', {
      //     'pragma': 'createElement',
      //     'pragmaFrag': 'Fragment',
      //     'throwIfNamespace': false,
      //   },
      // ],
      ['@babel/react', {'pragma': 'createElement', }],
      // [
      //   '@babel/typescript',
      //   {
      //     isTSX: true,
      //     allExtensions: true,
      //     onlyRemoveTypeImports: true,
      //   }
      // ],
    ],
    plugins: [
      // ["external-helpers"],
      // [
      //     'import',
      //     {
      //         libraryName: '@ad/sharpui',
      //         libraryDirectory: 'lib',
      //         // kwai-ui 使用css in js， 没有css文件
      //         style: () => false,
      //     },
      //     '@ad/sharpui',
      // ],
      // '@babel/rax-miniapp-babel-plugins',
      // [
      //   '@babel/plugin-proposal-decorators',
      //   {
      //     legacy: true,
      //   },
      // ],
      // ['babel-plugin-transform-jsx-fragment', { moduleName: 'rax' }],
      [
        '@babel/plugin-transform-runtime',
        {
          useESModules: true,
          corejs: 3,
          helpers: true
        },
      ],

      // '@babel/plugin-proposal-object-rest-spread',
      [
        '@babel/plugin-proposal-class-properties',
        {
          loose: true,
        },
      ],

      // '@babel/plugin-syntax-dynamic-import',
      // '@babel/plugin-syntax-import-meta',
      // '@babel/plugin-proposal-json-strings',
      // '@babel/plugin-proposal-function-sent',
      // '@babel/plugin-proposal-export-namespace-from',
      // '@babel/plugin-proposal-numeric-separator',
      // '@babel/plugin-proposal-throw-expressions',
      // '@babel/plugin-proposal-export-default-from',
      // '@babel/plugin-proposal-logical-assignment-operators',
      // '@babel/plugin-proposal-optional-chaining',
      // [
      //   '@babel/plugin-proposal-pipeline-operator',
      //   {
      //     proposal: 'minimal',
      //   },
      // ],
      // '@babel/plugin-proposal-nullish-coalescing-operator',
      // '@babel/plugin-proposal-do-expressions',
      // '@babel/plugin-proposal-function-bind',
    ],
  };
};
