import { isMiniApp, isWeChatMiniprogram } from 'universal-env';
import * as miniAppModule from './miniapp/ali';
import * as weChatModule from './miniapp/wechat';

import { Loading } from './types';

let Loading: Loading;
if (isMiniApp) {
  Loading = miniAppModule;
}
if (isWeChatMiniprogram) {
  Loading = weChatModule;
}

export default Loading;
