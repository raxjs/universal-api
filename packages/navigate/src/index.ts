import { isWeb, isWeex, isMiniApp, isWeChatMiniprogram } from 'universal-env';
import webModule from './web/index';
import weexModule from './weex/index';
import miniAppModule from './miniapp/ali/index';
import weChatModule from './miniapp/wechat/index';

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
