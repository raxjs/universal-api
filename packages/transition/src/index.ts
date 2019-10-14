import { isWeex, isMiniApp, isWeb, isWeChatMiniprogram } from 'universal-env';
import WebModule from './web';
import WeexModule from './weex';
import MiniAppModule from './miniapp/ali';
import WeChatModule from './miniapp/wechat';

let transition: any = () => {};
if (isWeb) {
  transition = WebModule;
}
if (isWeex) {
  transition = WeexModule;
}
if (isMiniApp) {
  transition = MiniAppModule;
}
if (isWeChatMiniprogram) {
  transition = WeChatModule;
}

export default transition;
