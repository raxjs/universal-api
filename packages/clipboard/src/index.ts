import { isWeb, isWeex, isMiniApp, isWeChatMiniprogram } from 'universal-env';
import webModule from './web';
import weexModule from './weex';
import miniAppModule from './miniapp/ali';
import weChatModule from './miniapp/wechat';
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
