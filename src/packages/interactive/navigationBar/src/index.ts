import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp, isKuaiShouMiniProgram, isBaiduSmartProgram } from '@uni/env';
import aliMiniAppModule from './ali-miniapp/index';
import webModule from './web/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';
import kuaiShouModule from './kuaishou-miniprogram/index';
import baiDuModule from './baidu-smartprogram/index';
import { SetNavigationBarColorOptions, SetNavigationBarTitleOptions } from './types';

export const setNavigationBarColor = (args?: SetNavigationBarColorOptions) => {
  if (isKuaiShouMiniProgram) {
    return kuaiShouModule.setNavigationBarColor(args);
  } else if (isWeChatMiniProgram) {
    return weChatModule.setNavigationBarColor(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.setNavigationBarColor(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.setNavigationBarColor(args);
  } else if (isBaiduSmartProgram) {
    return baiDuModule.setNavigationBarColor(args);
  } else {
    throw new Error('Uni API：setNavigationBarColor暂不支持');
  }
};

export const setNavigationBarTitle = (args?: SetNavigationBarTitleOptions) => {
  if (isWeb) {
    return webModule.setNavigationBarTitle(args);
  } else if (isKuaiShouMiniProgram) {
    return kuaiShouModule.setNavigationBarTitle(args);
  } else if (isWeChatMiniProgram) {
    return weChatModule.setNavigationBarTitle(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.setNavigationBarTitle(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.setNavigationBarTitle(args);
  } else if (isBaiduSmartProgram) {
    return baiDuModule.setNavigationBarTitle(args);
  } else {
    throw new Error('Uni API：setNavigationBarTitle暂不支持');
  }
};

export default {
  setNavigationBarColor,
  setNavigationBarTitle,
};
