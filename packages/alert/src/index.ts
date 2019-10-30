import { isWeb, isWeex, isMiniApp, isWeChatMiniprogram } from 'universal-env';
import webModule from './web';
import weexModule from './weex';
import miniAppModule from './miniapp/ali';
import weChatModule from './miniapp/wechat';

import { Alert } from './types';

let alert: Alert = () => Promise.resolve(null);
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
