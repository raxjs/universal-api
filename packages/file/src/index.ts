import { isWeb, isMiniApp, isWeChatMiniProgram } from 'universal-env';
import * as webModule from './web';
import * as miniAppModule from './miniapp/ali';
import * as weChatModule from './miniapp/wechat';

import { File } from './types';

let File: File;
if (isWeb) {
  File = webModule;
}
if (isMiniApp) {
  File = miniAppModule;
}
if (isWeChatMiniProgram) {
  File = weChatModule;
}

export default File;
