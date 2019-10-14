import { isWeb, isWeex, isMiniApp, isWeChatMiniprogram } from 'universal-env';

let alert: any = () => {};
if (isWeb) {
  alert = require('./web').default;
}
if (isWeex) {
  alert = require('./weex').default;
}
if (isMiniApp) {
  alert = require('./miniapp/ali').default;
}
if (isWeChatMiniprogram) {
  alert = require('./miniapp/wechat').default;
}

export default alert;
