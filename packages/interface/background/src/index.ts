import { isMiniApp, isWeChatMiniProgram } from 'universal-env';
import * as miniAppModule from './miniapp/ali';
import * as weChatModule from './miniapp/wechat';

import { Background } from './types';

let Background: Background;
if (isMiniApp) {
  Background = miniAppModule;
} else if (isWeChatMiniProgram) {
  Background = weChatModule;
}

export default Background;
