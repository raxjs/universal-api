import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from '@uni/env';
import aliMiniAppModule from './ali-miniapp/index';
import webModule from './web/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';

export const showLoading = (args?) => {
  if (isWeChatMiniProgram) {
    return weChatModule.showLoading(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.showLoading(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.showLoading(args);
  } else if (isWeb) {
    return webModule.showLoading(args);
  } else {
    throw new Error('@uni/apis：showLoading暂不支持');
  }
};

export const hideLoading = (args?) => {
  if (isWeChatMiniProgram) {
    return weChatModule.hideLoading(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.hideLoading(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.hideLoading(args);
  } else if (isWeb) {
    return webModule.hideLoading(args);
  } else {
    throw new Error('@uni/apis：hideLoading暂不支持');
  }
};

export default {
  showLoading,
  hideLoading,
};
