import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from '@uni/env';
import * as webModule from './web/index';
import * as aliMiniAppModule from './ali-miniapp/index';
import * as weChatModule from './wechat-miniprogram/index';
import * as bytedanceModule from './bytedance-microapp/index';
import { AsyncOptions } from './types';

export const getSystemInfoSync = () => {
  if (isWeChatMiniProgram) {
    return weChatModule.getSystemInfoSync();
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.getSystemInfoSync();
  } else if (isMiniApp) {
    return aliMiniAppModule.getSystemInfoSync();
  } else if (isWeb) {
    return webModule.getSystemInfoSync();
  } else {
    throw new Error('@uni/apis：getSystemInfoSync暂不支持');
  }
};

export const getSystemInfo = (options?: AsyncOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.getSystemInfo(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.getSystemInfo(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.getSystemInfo(options);
  } else if (isWeb) {
    return webModule.getSystemInfo(options);
  } else {
    throw new Error('@uni/apis：getSystemInfo暂不支持');
  }
};
