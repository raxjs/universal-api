import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from '@uni/env';
import * as aliMiniAppModule from './ali-miniapp/index';
import * as webModule from './web/index';
import * as weChatModule from './wechat-miniprogram/index';
import * as bytedanceModule from './bytedance-microapp/index';

export const getLocation = (args) => {
  if (isWeChatMiniProgram) {
    return weChatModule.getLocation(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.getLocation(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.getLocation(args);
  } else if (isWeb) {
    return webModule.getLocation(args);
  } else {
    throw new Error('@uni/apis：getLocation暂不支持');
  }
};

export const openLocation = (args) => {
  if (isWeChatMiniProgram) {
    return weChatModule.openLocation(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.openLocation(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.openLocation(args);
  } else {
    throw new Error('@uni/apis：openLocation暂不支持');
  }
};

export default {
  getLocation,
  openLocation,
};
