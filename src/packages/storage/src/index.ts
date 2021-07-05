import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from '@uni/env';
import webModule from './web/index';
import aliMiniAppModule from './ali-miniapp/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';

import {
  GetOrRemoveOptionStruct,
  GetOrRemoveSyncOptionStruct,
  SetOptionStruct,
  SetSyncOptionStruct,
  GetStorageRes,
  GetStorageSyncRes,
} from './types';

export const getStorage = (args: GetOrRemoveOptionStruct): GetStorageRes => {
  if (isWeb) {
    return webModule.getStorage(args);
  } else if (isWeChatMiniProgram) {
    return weChatModule.getStorage(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.getStorage(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.getStorage(args);
  } else {
    throw new Error('Uni API：getStorage暂不支持');
  }
};

export const getStorageSync = (args: GetOrRemoveSyncOptionStruct): GetStorageSyncRes => {
  if (isWeb) {
    return webModule.getStorageSync(args);
  } else if (isWeChatMiniProgram) {
    return weChatModule.getStorageSync(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.getStorageSync(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.getStorageSync(args);
  } else {
    throw new Error('Uni API：getStorageSync暂不支持');
  }
};

export const setStorage = (args: SetOptionStruct) => {
  if (isWeb) {
    return webModule.setStorage(args);
  } else if (isWeChatMiniProgram) {
    return weChatModule.setStorage(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.setStorage(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.setStorage(args);
  } else {
    throw new Error('Uni API：setStorage暂不支持');
  }
};

export const setStorageSync = (args: SetSyncOptionStruct) => {
  if (isWeb) {
    return webModule.setStorageSync(args);
  } else if (isWeChatMiniProgram) {
    return weChatModule.setStorageSync(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.setStorageSync(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.setStorageSync(args);
  } else {
    throw new Error('Uni API：setStorageSync暂不支持');
  }
};

export const removeStorage = (args: GetOrRemoveOptionStruct) => {
  if (isWeb) {
    return webModule.removeStorage(args);
  } else if (isWeChatMiniProgram) {
    return weChatModule.removeStorage(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.removeStorage(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.removeStorage(args);
  } else {
    throw new Error('Uni API：removeStorage暂不支持');
  }
};

export const removeStorageSync = (args: GetOrRemoveSyncOptionStruct) => {
  if (isWeb) {
    return webModule.removeStorageSync(args);
  } else if (isWeChatMiniProgram) {
    return weChatModule.removeStorageSync(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.removeStorageSync(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.removeStorageSync(args);
  } else {
    throw new Error('Uni API：removeStorageSync暂不支持');
  }
};

export default {
  getStorage,
  getStorageSync,
  setStorage,
  setStorageSync,
  removeStorage,
  removeStorageSync,
};
