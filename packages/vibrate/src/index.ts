import { isMiniApp, isWeChatMiniprogram } from 'universal-env';
import { IVibrate } from './types';

let Vibrate: IVibrate = {} as IVibrate;

if (isMiniApp) {
  Vibrate = require('./miniapp/ali').default;
}

if (isWeChatMiniprogram) {
  Vibrate = require('./miniapp/wechat').default;
}

export default Vibrate;
