import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp, isKuaiShouMiniProgram, isBaiduSmartProgram } from '@uni/env';
import aliMiniAppModule from './ali-miniapp/index';
import webModule from './web/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';
import kuaiShouModule from './kuaishou-miniprogram/index';
import baiDuModule from './baidu-smartprogram/index';

// web 暂不支持这个功能
export const getClipboard = (args) => {
  if (isKuaiShouMiniProgram) {
    return kuaiShouModule.getClipboard(args);
  } else if (isWeChatMiniProgram) {
    return weChatModule.getClipboard(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.getClipboard(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.getClipboard(args);
  } else if (isBaiduSmartProgram) {
    return baiDuModule.getClipboard(args);
  } else {
    throw new Error('Uni API：getClipboard暂不支持');
  }
};

export const setClipboard = (args) => {
  if (isWeb) {
    return webModule.setClipboard(args);
  } else if (isKuaiShouMiniProgram) {
    return kuaiShouModule.setClipboard(args);
  } else if (isWeChatMiniProgram) {
    return weChatModule.setClipboard(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.setClipboard(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.setClipboard(args);
  } else if (isBaiduSmartProgram) {
    return baiDuModule.setClipboard(args);
  } else {
    throw new Error('Uni API：setClipboard暂不支持');
  }
};

export default {
  getClipboard,
  setClipboard,
};
