import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from '@uni/env';
import aliMiniAppModule from './ali-miniapp/index';
import webModule from './web/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';
import { AnimationOptions } from './types';
import { normalizeOptions, applyAnimation } from './common';
import { CONTAINER_NAME } from '@utils/constant';

function createAnimation(options?: AnimationOptions) {
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

export {
  createAnimation,
  applyAnimation,
};

export default {
  createAnimation,
  applyAnimation,
};
