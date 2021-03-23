import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from '@uni/env';
import aliMiniAppModule from './ali-miniapp/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';
import webModule from './web/index';

export const getScrollOffset = (selector, context?) => {
  if (isWeChatMiniProgram) {
    return weChatModule.getScrollOffset(selector, context);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.getScrollOffset(selector);
  } else if (isMiniApp) {
    return aliMiniAppModule.getScrollOffset(selector);
  } else if (isWeb) {
    return webModule.getScrollOffset(selector);
  } else {
    throw new Error('@uni/apis：element暂不支持');
  }
};
export const getBoundingClientRect = (selector, context?) => {
  if (isWeChatMiniProgram) {
    return weChatModule.getBoundingClientRect(selector, context);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.getBoundingClientRect(selector);
  } else if (isMiniApp) {
    return aliMiniAppModule.getBoundingClientRect(selector);
  } else if (isWeb) {
    return webModule.getBoundingClientRect(selector);
  } else {
    throw new Error('@uni/apis：element暂不支持');
  }
};

export default {
  getScrollOffset,
  getBoundingClientRect,
};
