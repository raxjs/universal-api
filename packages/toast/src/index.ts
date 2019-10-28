import { isWeex, isMiniApp, isWeb, isWeChatMiniprogram } from 'universal-env';

import { ToastOption } from './types';

let Toast: ToastOption = {} as any;

if (isWeex) {
  Toast = require('./weex').default;
}
if (isWeb) {
  Toast = require('./web').default;
}
if (isMiniApp) {
  Toast = require('./miniapp/ali').default;
}
if (isWeChatMiniprogram) {
  Toast = require('./miniapp/wechat').default;
}

export default Toast;
