import { isWeb, isMiniApp, isWeChatMiniprogram } from 'universal-env';
import * as webModule from './web';
import * as miniAppModule from './miniapp/ali';
import * as weChatModule from './miniapp/wechat';

import { FileAPI } from './types';

let File: FileAPI;
if (isWeb) {
  File = webModule;
}
if (isMiniApp) {
  File = miniAppModule;
}
if (isWeChatMiniprogram) {
  File = weChatModule;
}

// @ts-ignore
export default File;
