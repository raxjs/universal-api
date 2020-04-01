import { isWeex, isMiniApp, isWeb, isWeChatMiniProgram, isByteDanceMicroApp } from 'universal-env';
import webModule from './web/index';
import weexModule from './weex/index';
import miniAppModule from './miniapp/ali/index';
import weChatModule from './miniapp/wechat/index';
import byteDanceModule from './miniapp/byteDance/index';

let confirm: any = () => {};

if (isWeex) {
  confirm = weexModule;
}
if (isWeb) {
  confirm = webModule;
}
if (isMiniApp) {
  confirm = miniAppModule;
}
if (isWeChatMiniProgram) {
  confirm = weChatModule;
}
if (isByteDanceMicroApp) {
  confirm = byteDanceModule;
}

export default confirm;
