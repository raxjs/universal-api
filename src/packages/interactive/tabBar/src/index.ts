import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp, isKuaiShouMiniProgram, isBaiduSmartProgram } from '@uni/env';
import aliMiniAppModule from './ali-miniapp/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';
import kuaiShouModule from './kuaishou-miniprogram/index';
import baiDuModule from './baidu-smartprogram/index';
import { ShowTabBarOptions, HideTabBarOptions } from './types';

export const hideTabBar = (args?: HideTabBarOptions) => {
  if (isKuaiShouMiniProgram) {
    return kuaiShouModule.hideTabBar(args);
  } else if (isWeChatMiniProgram) {
    return weChatModule.hideTabBar(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.hideTabBar(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.hideTabBar(args);
  } else if (isBaiduSmartProgram) {
    return baiDuModule.hideTabBar(args);
  } else {
    throw new Error('Uni API：hideTabBar暂不支持');
  }
};

export const showTabBar = (args?: ShowTabBarOptions) => {
  if (isKuaiShouMiniProgram) {
    return kuaiShouModule.showTabBar(args);
  } else if (isWeChatMiniProgram) {
    return weChatModule.showTabBar(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.showTabBar(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.showTabBar(args);
  } else if (isBaiduSmartProgram) {
    return baiDuModule.showTabBar(args);
  } else {
    throw new Error('Uni API：showTabBar暂不支持');
  }
};

export default {
  hideTabBar,
  showTabBar,
};
