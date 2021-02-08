import { isMiniApp, isDingdingMiniapp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from '@uni/env';
import webModule from './web/index';
import aliMiniAppModule from './ali-miniapp/index';
import weChatModule from './wechat-miniapp/index';
import bytedanceModule from './byte-miniapp/index';

export const getStorage = (args) => {
  if (isWeChatMiniProgram) {
    return weChatModule.getStorage(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.getStorage(args);
  } else if (isMiniApp || isDingdingMiniapp) {
    return aliMiniAppModule.getStorage(args);
  } else if (isWeb) {
    return webModule.getStorage(args);
  } else {
    throw new Error('@uni/apis：getStorage暂不支持');
  }
};

export const getStorageSync = (args) => {
  if (isWeChatMiniProgram) {
    return weChatModule.getStorageSync(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.getStorageSync(args);
  } else if (isMiniApp || isDingdingMiniapp) {
    return aliMiniAppModule.getStorageSync(args);
  } else if (isWeb) {
    return webModule.getStorageSync(args);
  } else {
    throw new Error('@uni/apis：getStorageSync暂不支持');
  }
};

export const setStorage = (args) => {
  if (isWeChatMiniProgram) {
    return weChatModule.setStorage(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.setStorage(args);
  } else if (isMiniApp || isDingdingMiniapp) {
    return aliMiniAppModule.setStorage(args);
  } else if (isWeb) {
    return webModule.setStorage(args);
  } else {
    throw new Error('@uni/apis：setStorage暂不支持');
  }
};

export const setStorageSync = (args) => {
  if (isWeChatMiniProgram) {
    return weChatModule.setStorageSync(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.setStorageSync(args);
  } else if (isMiniApp || isDingdingMiniapp) {
    return aliMiniAppModule.setStorageSync(args);
  } else if (isWeb) {
    return webModule.setStorageSync(args);
  } else {
    throw new Error('@uni/apis：setStorageSync暂不支持');
  }
};

export const removeStorage = (args) => {
  if (isWeChatMiniProgram) {
    return weChatModule.removeStorage(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.removeStorage(args);
  } else if (isMiniApp || isDingdingMiniapp) {
    return aliMiniAppModule.removeStorage(args);
  } else if (isWeb) {
    return webModule.removeStorage(args);
  } else {
    throw new Error('@uni/apis：removeStorage暂不支持');
  }
};

export const removeStorageSync = (args) => {
  if (isWeChatMiniProgram) {
    return weChatModule.removeStorageSync(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.removeStorageSync(args);
  } else if (isMiniApp || isDingdingMiniapp) {
    return aliMiniAppModule.removeStorageSync(args);
  } else if (isWeb) {
    return webModule.removeStorageSync(args);
  } else {
    throw new Error('@uni/apis：removeStorageSync暂不支持');
  }
};

export default {
  getStorage,
  getStorageSync,
  setStorage,
  setStorageSync,
  removeStorage,
  removeStorageSync
};
