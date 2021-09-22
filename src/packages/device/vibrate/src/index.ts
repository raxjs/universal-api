import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp, isKuaiShouMiniProgram, isBaiduSmartProgram } from '@uni/env';
import aliMiniAppModule from './ali-miniapp/index';
import webModule from './web/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';
import kuaiShouModule from './kuaishou-miniprogram/index';
import baiDuModule from './baidu-smartprogram/index';

// web 暂不支持这个功能
export const vibrateLong = (args) => {
  if (isWeb) {
    return webModule.vibrateLong(args);
  } else if (isKuaiShouMiniProgram) {
    return kuaiShouModule.vibrateLong();
  } else if (isWeChatMiniProgram) {
    return weChatModule.vibrateLong(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.vibrateLong(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.vibrateLong(args);
  } else if (isBaiduSmartProgram) {
    return baiDuModule.vibrateLong(args);
  } else {
    throw new Error('Uni API：vibrateLong暂不支持');
  }
};

export const vibrateShort = (args) => {
  if (isWeb) {
    return webModule.vibrateShort(args);
  } else if (isKuaiShouMiniProgram) {
    return kuaiShouModule.vibrateShort();
  } else if (isWeChatMiniProgram) {
    return weChatModule.vibrateShort(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.vibrateShort(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.vibrateShort(args);
  } else if (isBaiduSmartProgram) {
    return baiDuModule.vibrateShort(args);
  } else {
    throw new Error('Uni API：vibrateShort暂不支持');
  }
};

export default {
  vibrateLong,
  vibrateShort,
};
