import { isMiniApp, isWeChatMiniProgram, isWeb } from 'universal-env';
import * as miniAppModule from './miniapp/ali';
import * as weChatModule from './miniapp/wechat';
import * as webModule from './web';

import { Loading } from './types';

let Loading: Loading;
if (isMiniApp) {
  Loading = miniAppModule;
}
if (isWeChatMiniProgram) {
  Loading = weChatModule;
}
if (isWeb) {
  Loading = webModule;
}

export default Loading;
