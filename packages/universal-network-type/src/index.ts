import { isMiniApp, isWeChatMiniprogram } from 'universal-env';
import { NetworkType } from './types';

let NetworkType: NetworkType = {} as NetworkType;

if (isMiniApp) {
  NetworkType = require('./miniapp/ali').default;
}

if (isWeChatMiniprogram) {
  NetworkType = require('./miniapp/wechat').default;
}

export default NetworkType;
