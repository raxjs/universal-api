module.exports = {
  'name': '@uni/apis',
  'version': '1.0.0',
  'description': '',
  'main': 'lib/index.js',
  'module': 'es/index.js',
  'unpkg': 'dist/index.js',
  'typings': 'types/index.d.ts',
  "sideEffects": false,
  'peerDependencies': {
    '@uni/env': '^1.0.0',
  },
  'dependencies': {
    '@babel/runtime-corejs3': '^7.11.0'
  },
  "repository": {
    "type": "git",
    "url": "git@github.com:raxjs/universal-api.git"
  },
  'license': 'BSD-3-Clause',
  'author': 'rax',
};