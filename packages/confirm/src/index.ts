import { isWeex, isMiniApp, isWeb, isWeChatMiniprogram } from 'universal-env';
import WebModule from './web';
import WeexModule from './weex';
import MiniAppModule from './miniapp/ali';
import WeChatModule from './miniapp/wechat';

let confirm: any = () => {};

if (isWeex) {
  confirm = WeexModule;
}
if (isWeb) {
  confirm = WebModule;
}
if (isMiniApp) {
  confirm = MiniAppModule;
}
if (isWeChatMiniprogram) {
  confirm = WeChatModule;
}

export default confirm;
