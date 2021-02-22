import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from '@uni/env';
import aliMiniAppModule from './ali-miniapp/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';
import webModule from './web/index';
import {Callback, RejectCallback, ErrorEvent} from './types';

export const onError = (cb: Callback) => {
  if (isWeChatMiniProgram) {
    return weChatModule.onError(cb);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.onError(cb);
  } else if (isMiniApp) {
    return aliMiniAppModule.onError(cb);
  } else if (isWeb) {
    return webModule.onError(cb);
  } else {
    throw new Error('@uni/apis：errorEvent暂不支持');
  }
};
export const offError = (cb: () => void) => {
  if (isWeChatMiniProgram) {
    return weChatModule.offError(cb);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.offError(cb);
  } else if (isMiniApp) {
    return aliMiniAppModule.offError(cb);
  } else if (isWeb) {
    return webModule.offError(cb);
  } else {
    throw new Error('@uni/apis：errorEvent暂不支持');
  }
};
export const onUnhandledRejection = (cb: RejectCallback) => {
  if (isWeChatMiniProgram) {
    return weChatModule.onUnhandledRejection(cb);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.onUnhandledRejection(cb);
  } else if (isMiniApp) {
    return aliMiniAppModule.onUnhandledRejection(cb);
  } else if (isWeb) {
    return webModule.onUnhandledRejection(cb);
  } else {
    throw new Error('@uni/apis：errorEvent暂不支持');
  }
};
export const offUnhandledRejection = (cb?: RejectCallback) => {
  if (isWeChatMiniProgram) {
    return weChatModule.offUnhandledRejection(cb);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.offUnhandledRejection(cb);
  } else if (isMiniApp) {
    return aliMiniAppModule.offUnhandledRejection(cb);
  } else if (isWeb) {
    return webModule.offUnhandledRejection(cb);
  } else {
    throw new Error('@uni/apis：errorEvent暂不支持');
  }
};
let res: ErrorEvent;
if (isWeChatMiniProgram) {
  res = weChatModule;
} else if (isByteDanceMicroApp) {
  res = bytedanceModule;
} else if (isMiniApp) {
  res = aliMiniAppModule;
} else {
  throw new Error('@uni/apis：errorEvent暂不支持');
}
export default res;