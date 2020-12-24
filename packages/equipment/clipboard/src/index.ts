import { isMiniApp, isDingdingMiniapp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from 'universal-env';
import aliMiniAppModule from './ali-miniapp/index';
import webModule from './web/index';
import weChatModule from './wechat-miniapp/index';
import bytedanceModule from './byte-miniapp/index';

// web 暂不支持这个功能
export const getClipboard = (args) => {
  if (isWeChatMiniProgram) {
    return weChatModule.getClipboard(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.getClipboard(args);
  } else if (isMiniApp || isDingdingMiniapp) {
    return aliMiniAppModule.getClipboard(args);
  } else {
    throw new Error('evapi：getClipboard暂不支持');
  }
};

export const setClipboard = (args) => {
  if (isWeChatMiniProgram) {
    return weChatModule.setClipboard(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.setClipboard(args);
  } else if (isMiniApp || isDingdingMiniapp) {
    return aliMiniAppModule.setClipboard(args);
  } else if (isWeb) {
    return webModule.setClipboard(args);
  } else {
    throw new Error('evapi：setClipboard暂不支持');
  }
};

export default {
  getClipboard,
  setClipboard
};
