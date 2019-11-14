import { isWeb, isWeex, isMiniApp, isWeChatMiniprogram } from 'universal-env';
import webModule from './web/index';
import weexModule from './weex/index';
import miniAppModule from './miniapp/ali/index';
import weChatModule from './miniapp/wechat/index';
import { Clipboard } from './types';

let Clipboard: Clipboard;

if (isWeb) {
  Clipboard = webModule;
}

if (isWeex) {
  Clipboard = weexModule;
}

if (isMiniApp) {
  Clipboard = miniAppModule;
}

if (isWeChatMiniprogram) {
  Clipboard = weChatModule;
}

export default Clipboard;
