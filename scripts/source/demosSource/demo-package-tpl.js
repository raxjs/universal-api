module.exports = {
  'name': 'universal-api',
  'version': '1.0.0',
  'description': '',
  'typings': 'types/index.d.ts',
  "scripts": {
    "start": "rax-app start",
    "build": "rax-app build",
    "herbox":"node herbox.js",
    "herbox:online":"node herbox.js --prod",
    "lint": "eslint --ext .js --ext .jsx ./"
  },
  'dependencies': {
    "rax": "^1.1.0",
    "rax-document": "^0.1.0",
    "rax-image": "^2.0.0",
    "rax-link": "^1.0.1",
    "rax-text": "^2.0.0",
    "rax-view": "^2.0.0",
    "rax-recyclerview": "^1.2.1",
    "rax-scrollview": "^3.2.3",
    "rax-slider": "^2.3.2",
    "rax-textinput": "^1.2.1",
    "rax-video": "^1.4.0",
    '@babel/runtime-corejs3': '^7.11.0'
  },
  "devDependencies": {
    "@alipay/herbox-cli": "^0.10.1",
    "rax-app": "^3.0.0",
    "@iceworks/spec": "^1.0.0",
    "@types/rax": "^1.0.0",
    "eslint": "^6.8.0",
    "prettier": "^2.1.2",
    "stylelint": "^13.7.2",
    "@ali/build-plugin-rax-app-def": "^2.0.0"
  },
  'license': 'BSD-3-Clause',
  'author': 'rax',
};