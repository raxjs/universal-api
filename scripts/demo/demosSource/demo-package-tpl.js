module.exports = {
  'name': '@uni/apis',
  'version': '1.0.0',
  'description': '',
  'typings': 'types/index.d.ts',
  "scripts": {
    "start": "rax-app start",
    "build": "rax-app build",
    "herbox":"node herbox.js",
    "herbox:online":"node herbox.js --prod",
  },
  'dependencies': {
    "rax": "^1.1.0",
    "rax-app": "^3.5.0",
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
    "miniapp-history": "0.1.5-1",
    "rax-miniapp-runtime-webpack-plugin": "^4.9.0"
  },
  "resolutions": {
    "miniapp-history": "0.1.5-1"
  },
  "devDependencies": {
    "@uni/build-plugin-rax-api-import": "^1.0.0",
    // "@alipay/herbox-cli": "^0.10.1",
    "@types/rax": "^1.0.0"
  },
  'license': 'BSD-3-Clause',
  'author': 'rax',
};