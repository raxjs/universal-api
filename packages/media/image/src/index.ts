import { isMiniApp, isWeChatMiniProgram } from 'universal-env';
import * as miniAppModule from './miniapp/ali';
import * as weChatModule from './miniapp/wechat';

import { Image } from './types';

let Image: Image;
if (isMiniApp) {
  Image = miniAppModule;
}
if (isWeChatMiniProgram) {
  Image = weChatModule;
}

export default Image;
