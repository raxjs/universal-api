import { isMiniApp, isWeChatMiniprogram } from 'universal-env';
import * as miniAppModule from './miniapp/ali';
import * as weChatModule from './miniapp/wechat';

import { Keyboard } from './types';

let Keyboard: Keyboard;
if (isMiniApp) {
  Keyboard = miniAppModule;
} else if (isWeChatMiniprogram) {
  Keyboard = weChatModule;
}

export default Keyboard;
