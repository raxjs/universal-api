import { isMiniApp, isDingdingMiniapp, isWeChatMiniProgram, isByteDanceMicroApp } from '@uni/env';
import aliMiniAppModule from './ali-miniapp/index';
import weChatModule from './wechat-miniapp/index';
import bytedanceModule from './byte-miniapp/index';

const getImageInfo = (args) => {
  if (isWeChatMiniProgram) {
    return weChatModule(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule(args);
  } else if (isMiniApp || isDingdingMiniapp) {
    return aliMiniAppModule(args);
  } else {
    throw new Error('@uni/apis：getImageInfo暂不支持');
  }
};

export default getImageInfo;
