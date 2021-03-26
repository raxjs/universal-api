import { isMiniApp, isWeChatMiniProgram } from '@uni/env';
import * as miniAppModule from './miniapp/ali';
import * as weChatModule from './miniapp/wechat';

import { Background } from './types';

let background: Background;
if (isMiniApp) {
  background = miniAppModule;
} else if (isWeChatMiniProgram) {
  background = weChatModule;
}

export default background;
