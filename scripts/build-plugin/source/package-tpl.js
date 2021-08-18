module.exports = {
  'name': '@uni/apis',
  'version': '1.0.0',
  'description': '',
  'main': 'lib/index.js',
  'module': 'es/index.js',
  'unpkg': 'dist/index.js',
  'typings': 'types/index.d.ts',
  "sideEffects": false,
  "exports": {
    ".": {
      "web": "./es/web/index.js",
      "wechat-miniprogram": "./es/wechat-miniprogram/index.js",
      "bytedance-microapp": "./es/bytedance-microapp/index.js",
      "miniapp": "./es/ali-miniapp/index.js",
      'baidu-smartprogram': './es/baidu-smartprogram/index.js',
      'kuaishou-miniprogram': './es/kuaishou-miniprogram/index.js',
      "default": "./es/index.js",
    },
    './lib/': './lib/',
    "./*": "./*"
  },
  'dependencies': {
    '@uni/env': '^1.0.0',
  },
  "repository": {
    "type": "git",
    "url": "git@github.com:raxjs/universal-api.git"
  },
  'license': 'BSD-3-Clause',
  'author': 'rax',
};