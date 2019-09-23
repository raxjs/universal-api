import { isMiniApp, isWeChatMiniprogram } from 'universal-env';
import { IScreen } from './types';

let Screen: IScreen = {} as IScreen;

if (isMiniApp) {
  Screen = require('./miniapp/ali').default;
}

if (isWeChatMiniprogram) {
  Screen = require('./miniapp/wechat').default;
}

export default Screen;
