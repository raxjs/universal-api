import { isMiniApp, isWeChatMiniProgram } from 'universal-env';
import * as miniAppModule from './miniapp/ali';
import * as weChatModule from './miniapp/wechat';

import { Network } from './types';

let Network: Network;
if (isMiniApp) {
  Network = miniAppModule;
}
if (isWeChatMiniProgram) {
  Network = weChatModule;
}

export default Network;
