import { isWeb, isWeex, isMiniApp, isWeChatMiniprogram } from 'universal-env';
import webModule from './web';
import weexModule from './weex';
import miniAppModule from './miniapp/ali';
import weChatModule from './miniapp/wechat';

import { Navigate } from './types';

let Navigate: Navigate;

if (isWeb) {
  Navigate = webModule;
}

if (isWeex) {
  Navigate = weexModule;
}

if (isMiniApp) {
  Navigate = miniAppModule;
}

if (isWeChatMiniprogram) {
  Navigate = weChatModule;
}

export default Navigate;
