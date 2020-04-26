import { isWeb, isWeex, isMiniApp, isWeChatMiniProgram, isQuickApp } from 'universal-env';
import webModule from './web/index';
import weexModule from './weex/index';
import miniAppModule from './miniapp/ali/index';
import weChatModule from './miniapp/wechat/index';
import { ChooseImage } from './types';

let chooseImage: ChooseImage = () => Promise.resolve(null);

if (isWeb) {
  chooseImage = webModule;
} else if (isWeex) {
  chooseImage = weexModule;
} else if (isMiniApp) {
  chooseImage = miniAppModule;
} else if (isWeChatMiniProgram) {
  chooseImage = weChatModule;
}

export default chooseImage;
