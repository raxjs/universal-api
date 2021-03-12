import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from '@uni/env';
import webModule from './web/index';
import aliMiniAppModule from './ali-miniapp/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';
import { AsyncOptions } from './types';

export const getInfoSync = () => {
  if (isWeChatMiniProgram) {
    return weChatModule.getInfoSync();
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.getInfoSync();
  } else if (isMiniApp) {
    return aliMiniAppModule.getInfoSync();
  } else if (isWeb) {
    return webModule.getInfoSync();
  } else {
    throw new Error('@uni/apis：systemInfo.getInfoSync暂不支持');
  }
};

export const getInfo = (options?: AsyncOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.getInfo(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.getInfo(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.getInfo(options);
  } else if (isWeb) {
    return webModule.getInfo(options);
  } else {
    throw new Error('@uni/apis：systemInfo.getInfo暂不支持');
  }
};
export default {
  getInfoSync,
  getInfo,
};
