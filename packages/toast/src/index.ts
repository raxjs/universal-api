import { isWeex, isMiniApp, isWeb, isWeChatMiniprogram } from 'universal-env';
import webModule from './web/index';
import weexModule from './weex/index';
import miniAppModule from './miniapp/ali/index';
import weChatModule from './miniapp/wechat/index';
import { ToastOption } from './types';

let Toast: ToastOption = {} as any;

if (isWeb) {
  Toast = webModule;
} else if (isWeex) {
  Toast = weexModule;
} else if (isMiniApp) {
  Toast = miniAppModule;
} else if (isWeChatMiniprogram) {
  Toast = weChatModule;
}

export default Toast;
