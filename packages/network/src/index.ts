import { isMiniApp, isWeChatMiniprogram } from 'universal-env';
import * as miniAppModule from './miniapp/ali';
import * as weChatModule from './miniapp/wechat';

import { Network } from './types';

let Network: Network;
if (isMiniApp) {
  Network = miniAppModule;
}
if (isWeChatMiniprogram) {
  Network = weChatModule;
}

export default Network;
