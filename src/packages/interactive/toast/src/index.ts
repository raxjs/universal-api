import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from '@uni/env';
import aliMiniAppModule from './ali-miniapp/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';
import webModule from './web/index';
import { ShowToastOption, HideToastOption } from './types';

export const show = (options: ShowToastOption | string) => {
  if (isWeChatMiniProgram) {
    return weChatModule.show(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.show(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.show(options);
  } else if (isWeb) {
    return webModule.show(options);
  } else {
    throw new Error('@uni/apis：Toast暂不支持');
  }
};
export const hide = (options?: HideToastOption) => {
  if (isWeChatMiniProgram) {
    return weChatModule.hide(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.hide(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.hide(options);
  } else if (isWeb) {
    return webModule.hide(options);
  } else {
    throw new Error('@uni/apis：Toast暂不支持');
  }
};
export const showToast = (options: ShowToastOption | string) => {
  if (isWeChatMiniProgram) {
    return weChatModule.showToast(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.showToast(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.showToast(options);
  } else if (isWeb) {
    return webModule.showToast(options);
  } else {
    throw new Error('@uni/apis：Toast暂不支持');
  }
};
export const hideToast = (options?: HideToastOption) => {
  if (isWeChatMiniProgram) {
    return weChatModule.hideToast(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.hideToast(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.hideToast(options);
  } else if (isWeb) {
    return webModule.hideToast(options);
  } else {
    throw new Error('@uni/apis：Toast暂不支持');
  }
};
export default {
  show,
  hide,
  showToast,
  hideToast,
};
