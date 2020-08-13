import { isMiniApp, isWeChatMiniProgram } from 'universal-env';
import * as miniAppModule from './miniapp/ali';
import * as weChatModule from './miniapp/wechat';

import { Loading } from './types';

let Loading: Loading;
if (isMiniApp) {
  Loading = miniAppModule;
}
if (isWeChatMiniProgram) {
  Loading = weChatModule;
}

export default Loading;
