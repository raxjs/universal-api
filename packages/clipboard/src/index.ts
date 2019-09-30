import { isWeex, isMiniApp } from 'universal-env';

let clipboard: any;

if (isWeex) {
  clipboard = require('./weex').default;
} else if (isMiniApp) {
  clipboard = require('./miniapp').default;
} else {
  clipboard = require('./web').default;
}

export default clipboard;
