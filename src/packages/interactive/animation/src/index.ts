import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from '@uni/env';
import aliMiniAppModule from './ali-miniapp/index';
import webModule from './web/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';
import { AnimationOptions, TransitionOptions } from './types';

export function createAnimation(options?: AnimationOptions) {
  if (isWeb) {
    return webModule.createAnimation(options);
  } else if (isWeChatMiniProgram) {
    return weChatModule.createAnimation(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.createAnimation(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.createAnimation(options);
  } else {
    throw new Error('@uni/apis：createAnimation 暂不支持');
  }
}

export function createTransition(options: TransitionOptions) {
  if (isWeb) {
    return webModule.createTransition(options);
  } else if (isWeChatMiniProgram) {
    return weChatModule.createTransition(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.createTransition(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.createTransition(options);
  } else {
    throw new Error('@uni/apis：createTransition 暂不支持');
  }
}

export default {
  createAnimation,
  createTransition,
};
