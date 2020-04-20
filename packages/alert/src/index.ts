import { isWeb, isWeex, isMiniApp, isWeChatMiniProgram, isByteDanceMicroApp } from 'universal-env';
import webModule from './web/index';
import weexModule from './weex/index';
import miniAppModule from './ali-miniapp/index';
import weChatModule from './wechat-miniprogram/index';
import byteDanceModule from './bytedance-microapp/index';

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
if (isWeChatMiniProgram) {
  alert = weChatModule;
}
if (isByteDanceMicroApp) {
  alert = byteDanceModule;
}

export default alert;
