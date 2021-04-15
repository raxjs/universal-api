import { isMiniApp, isWeChatMiniProgram } from '@uni/env';
import * as miniAppModule from './miniapp/ali';
import * as weChatModule from './miniapp/wechat';

import { Keyboard } from './types';

let keyboard: Keyboard;
if (isMiniApp) {
  keyboard = miniAppModule;
} else if (isWeChatMiniProgram) {
  keyboard = weChatModule;
}

export default keyboard;
