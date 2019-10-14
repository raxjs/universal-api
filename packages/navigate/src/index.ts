import { isWeex, isMiniApp } from 'universal-env';

let navigate;
if (isWeex) {
  navigate = require('./weex').default;
} else if (isMiniApp) {
  navigate = require('./miniapp').default;
} else {
  navigate = require('./web').default;
}

export default navigate;
