import { isMiniApp, isDingdingMiniapp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from 'universal-env';
import aliMiniAppModule from './ali-miniapp/index';
import webModule from './web/index';
import weChatModule from './wechat-miniapp/index';
import bytedanceModule from './byte-miniapp/index';

const chooseImage = (args) => {
  if (isWeChatMiniProgram) {
    return weChatModule(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule(args);
  } else if (isMiniApp || isDingdingMiniapp) {
    return aliMiniAppModule(args);
  } else if (isWeb) {
    return webModule(args);
  } else {
    throw new Error('evapi：chooseImage暂不支持');
  }
};

export default chooseImage;
