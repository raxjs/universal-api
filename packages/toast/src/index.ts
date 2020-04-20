import { isWeex, isMiniApp, isWeb, isWeChatMiniProgram, isByteDanceMicroApp } from 'universal-env';
import webModule from './web/index';
import weexModule from './weex/index';
import miniAppModule from './miniapp/ali-miniapp/index';
import weChatModule from './miniapp/wechat-miniprogram/index';
import byteDanceModule from './miniapp/bytedance-microapp/index';
import { ToastOption } from './types';

let Toast: ToastOption = {} as any;

if (isWeb) {
  // Aviod includes wechat or alipay sdk
  Toast = webModule;
} else if (isWeex) {
  Toast = weexModule;
} else if (isMiniApp) {
  Toast = miniAppModule;
} else if (isWeChatMiniProgram) {
  Toast = weChatModule;
} else if (isByteDanceMicroApp) {
  Toast = byteDanceModule;
} else {
  // Web as default
  Toast = webModule;
}

export default Toast;
