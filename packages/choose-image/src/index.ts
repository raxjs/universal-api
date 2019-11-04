import { isWeb, isWeex, isMiniApp, isWeChatMiniprogram } from 'universal-env';
import webModule from './web';
import weexModule from './weex';
import miniAppModule from './miniapp/ali';
import weChatModule from './miniapp/wechat';

import { ChooseImage } from './types';


let chooseImage: ChooseImage = () => Promise.resolve(null);

if (isWeb) {
  chooseImage = webModule;
}

if (isWeex) {
  chooseImage = weexModule;
}

if (isMiniApp) {
  chooseImage = miniAppModule;
}

if (isWeChatMiniprogram) {
  chooseImage = weChatModule;
}

export default chooseImage;
