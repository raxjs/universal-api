import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from '@uni/env';
import aliMiniAppModule from './ali-miniapp/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';
import webModule from './web/index';
import {
  Callback, RejectCallback,
} from './types';

export const getApp = () => {
  if (isWeChatMiniProgram) {
    return weChatModule.getApp();
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.getApp();
  } else if (isMiniApp) {
    return aliMiniAppModule.getApp();
  } else if (isWeb) {
    return webModule.getApp();
  } else {
    throw new Error('@uni：application.getApp 暂不支持');
  }
};
export const getCurrentPages = () => {
  if (isWeChatMiniProgram) {
    return weChatModule.getCurrentPages();
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.getCurrentPages();
  } else if (isMiniApp) {
    return aliMiniAppModule.getCurrentPages();
  } else if (isWeb) {
    return webModule.getCurrentPages();
  } else {
    throw new Error('@uni：application.getCurrentPages 暂不支持');
  }
};
export const getLaunchOptionsSync = () => {
  if (isWeChatMiniProgram) {
    return weChatModule.getLaunchOptionsSync();
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.getLaunchOptionsSync();
  } else if (isMiniApp) {
    return aliMiniAppModule.getLaunchOptionsSync();
  } else if (isWeb) {
    return webModule.getLaunchOptionsSync();
  } else {
    throw new Error('@uni：application.getLaunchOptionsSync 暂不支持');
  }
};
export const onError = (options: Callback) => {
  if (isWeChatMiniProgram) {
    return weChatModule.onError(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.onError(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.onError(options);
  } else if (isWeb) {
    return webModule.onError(options);
  } else {
    throw new Error('@uni：onError 暂不支持');
  }
};
export const offError = (options: Callback) => {
  if (isWeChatMiniProgram) {
    return weChatModule.offError(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.offError(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.offError(options);
  } else if (isWeb) {
    return webModule.offError(options);
  } else {
    throw new Error('@uni：offError暂不支持');
  }
};
export const onUnhandledRejection = (options: RejectCallback) => {
  if (isWeChatMiniProgram) {
    return weChatModule.onUnhandledRejection(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.onUnhandledRejection(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.onUnhandledRejection(options);
  } else if (isWeb) {
    return webModule.onUnhandledRejection(options);
  } else {
    throw new Error('@uni：onUnhandledRejection 暂不支持');
  }
};
export const offUnhandledRejection = (options: RejectCallback) => {
  if (isWeChatMiniProgram) {
    return weChatModule.offUnhandledRejection(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.offUnhandledRejection(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.offUnhandledRejection(options);
  } else if (isWeb) {
    return webModule.offUnhandledRejection(options);
  } else {
    throw new Error('@uni：Application.offUnhandledRejection 暂不支持');
  }
};
export default {
  getApp,
  getCurrentPages,
  getLaunchOptionsSync,
  onError,
  offError,
  onUnhandledRejection,
  offUnhandledRejection,
};
