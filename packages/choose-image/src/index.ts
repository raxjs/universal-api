import { isWeb, isWeex, isMiniApp, isWeChatMiniprogram, isByteDanceMicroApp } from 'universal-env';
import webModule from './web/index';
import weexModule from './weex/index';
import miniAppModule from './miniapp/ali/index';
import weChatModule from './miniapp/wechat/index';
import bytedanceModule from './miniapp/bytedance-microapp/index';

import { ChooseImage } from './types';

let chooseImage: ChooseImage = () => Promise.resolve(null);

if (isWeb) {
  chooseImage = webModule;
} else if (isWeex) {
  chooseImage = weexModule;
} else if (isMiniApp) {
  chooseImage = miniAppModule;
} else if (isByteDanceMicroApp) {
  chooseImage = bytedanceModule;
} else if (isWeChatMiniprogram) {
  chooseImage = weChatModule;
}

export default chooseImage;
