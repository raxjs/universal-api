import { isWeb, isWeex, isMiniApp, isWeChatMiniprogram } from 'universal-env';
import webModule from './web';
import weexModule from './weex';
import miniAppModule from './web';
import weChatModule from './web';

import { Alert } from './types';

let alert: Alert = options => Promise.resolve(null);
if (isWeb) {
  alert = webModule;
}
if (isWeex) {
  alert = weexModule;
}
if (isMiniApp) {
  alert = miniAppModule;
}
if (isWeChatMiniprogram) {
  alert = weChatModule;
}

export default alert;
