import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from '@uni/env';
import aliMiniAppModule from './ali-miniapp/index';
import webModule from './web/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';

// web 暂不支持这个功能
export const getClipboard = (args) => {
  if (isWeChatMiniProgram) {
    return weChatModule.getClipboard(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.getClipboard(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.getClipboard(args);
  } else {
    throw new Error('@uni/apis：getClipboard暂不支持');
  }
};

export const setClipboard = (args) => {
  if (isWeChatMiniProgram) {
    return weChatModule.setClipboard(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.setClipboard(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.setClipboard(args);
  } else if (isWeb) {
    return webModule.setClipboard(args);
  } else {
    throw new Error('@uni/apis：setClipboard暂不支持');
  }
};

export default {
  getClipboard,
  setClipboard,
};
