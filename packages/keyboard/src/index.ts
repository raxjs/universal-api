import { isMiniApp, isWeChatMiniprogram } from 'universal-env';
import { IKeyboard } from './types';

let Keyboard: IKeyboard = {} as IKeyboard;

if (isMiniApp) {
  Keyboard = require('./miniapp/ali').default;
}

if (isWeChatMiniprogram) {
  Keyboard = require('./miniapp/wechat').default;
}

export default Keyboard;
