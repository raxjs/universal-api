import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from '@uni/env';
import aliMiniAppModule from './ali-miniapp/index';
import webModule from './web/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';
import { Animation, AnimationData, AnimationOptions } from './types';
import { normalizeOptions } from './common';
import { CONTAINER_NAME } from '@utils/constant';

export function createAnimation(options?: AnimationOptions) {
  if (isWeChatMiniProgram) {
    return weChatModule.createAnimation(
      normalizeOptions(options, CONTAINER_NAME.WECHAT),
    );
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.createAnimation(
      normalizeOptions(options, CONTAINER_NAME.BYTE),
    );
  } else if (isMiniApp) {
    return aliMiniAppModule.createAnimation(
      normalizeOptions(options, CONTAINER_NAME.ALIPAY),
    );
  } else if (isWeb) {
    return webModule.createAnimation(
      normalizeOptions(options, CONTAINER_NAME.WEB),
    );
  } else {
    throw new Error('@uni/apis：createAnimation 暂不支持');
  }
}

export function applyAnimation(animation: Animation, dom?: HTMLElement): AnimationData {
  const data = animation.export();
  if (isWeb) {
    webModule.applyAnimation(data, dom);
  }
  return data;
}

export default {
  createAnimation,
  applyAnimation,
};
