import { isMiniApp, isWeChatMiniprogram } from 'universal-env';
import * as miniAppModule from './miniapp/ali';
import * as weChatModule from './miniapp/wechat';

import { Background } from './types';

let Background: Background;
if (isMiniApp) {
  Background = miniAppModule;
} else if (isWeChatMiniprogram) {
  Background = weChatModule;
}

export default Background;
