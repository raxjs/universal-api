import { isWeex, isMiniApp } from 'universal-env';

let universalModule: any;
if (isWeex) {
  universalModule = require('./weex').default;
} else if (isMiniApp) {
  universalModule = require('./miniapp').default;
} else {
  universalModule = require('./web').default;
}

export default universalModule;
