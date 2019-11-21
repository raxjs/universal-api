import { isMiniApp, isWeChatMiniprogram } from 'universal-env';
import * as miniAppModule from './miniapp/ali';
import * as weChatModule from './miniapp/wechat';

import { WebSocket } from './types';

let WebSocket: WebSocket;

if (isMiniApp) {
  WebSocket = miniAppModule;
} else if (isWeChatMiniprogram) {
  WebSocket = weChatModule;
}

export default WebSocket;
