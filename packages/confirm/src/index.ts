import {
  isWeex,
  isMiniApp,
  isWeb,
  isWeChatMiniProgram,
  isQuickApp
} from 'universal-env';
import webModule from './web/index';
import weexModule from './weex/index';
import miniAppModule from './miniapp/ali/index';
import weChatModule from './miniapp/wechat/index';
import quickModule from './quickapp/index';

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
if (isQuickApp) {
  confirm = quickModule;
}

export default confirm;
