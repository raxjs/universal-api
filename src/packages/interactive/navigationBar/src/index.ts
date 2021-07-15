import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from '@uni/env';
import aliMiniAppModule from './ali-miniapp/index';
import webModule from './web/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';
import { SetNavigationBarColorOptions, SetNavigationBarTitleOptions } from './types';

export const setNavigationBarColor = (args?: SetNavigationBarColorOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.setNavigationBarColor(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.setNavigationBarColor(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.setNavigationBarColor(args);
  } else if (isWeb) {
    throw new Error('Uni API：setNavigationBarColor暂不支持');
  } else {
    throw new Error('Uni API：setNavigationBarColor暂不支持');
  }
};

export const setNavigationBarTitle = (args?: SetNavigationBarTitleOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.setNavigationBarTitle(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.setNavigationBarTitle(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.setNavigationBarTitle(args);
  } else if (isWeb) {
    return webModule.setNavigationBarTitle(args);
  } else {
    throw new Error('Uni API：setNavigationBarTitle暂不支持');
  }
};

export default {
  setNavigationBarColor,
  setNavigationBarTitle,
};
