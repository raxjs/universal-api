import { isWeb, isWeex, isMiniApp, isWeChatMiniProgram, isQuickApp } from 'universal-env';
import webModule from './web/index';
import weexModule from './weex/index';
import miniAppModule from './miniapp/ali/index';
import weChatModule from './miniapp/wechat/index';
import quickAppModule from './quickapp/index';

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

if (isWeChatMiniProgram) {
  chooseImage = weChatModule;
}

if (isQuickApp) {
  chooseImage = quickAppModule;
}

export default chooseImage;
