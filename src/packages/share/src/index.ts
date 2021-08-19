import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp, isKuaiShouMiniProgram, isBaiduSmartProgram } from '@uni/env';
import aliMiniAppModule from './ali-miniapp/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';
import webModule from './web/index';
import kuaiShouModule from './kuaishou-miniprogram/index';
import baiDuModule from './baidu-smartprogram/index';
import { Options } from './types';

export const showShareMenu = (options?: Options) => {
  if (isWeb) {
    return webModule.showShareMenu();
  } else if (isKuaiShouMiniProgram) {
    return kuaiShouModule.showShareMenu(options);
  } else if (isWeChatMiniProgram) {
    return weChatModule.showShareMenu(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.showShareMenu(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.showShareMenu();
  } else if (isBaiduSmartProgram) {
    return baiDuModule.showShareMenu(options);
  } else {
    throw new Error('Uni API：showShareMenu 暂不支持');
  }
};
export const hideShareMenu = (options?: Options) => {
  if (isWeb) {
    return webModule.hideShareMenu();
  } else if (isKuaiShouMiniProgram) {
    return kuaiShouModule.hideShareMenu(options);
  } else if (isWeChatMiniProgram) {
    return weChatModule.hideShareMenu(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.hideShareMenu(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.hideShareMenu();
  } else if (isBaiduSmartProgram) {
    return baiDuModule.hideShareMenu();
  } else {
    throw new Error('Uni API：hideShareMenu 暂不支持');
  }
};
export default {
  showShareMenu,
  hideShareMenu,
};
