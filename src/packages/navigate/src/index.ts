import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from '@uni/env';
import aliMiniAppModule from './ali-miniapp/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';
import webModule from './web/index';
import { IPushOptions, IGoOptions, IPopOptions, IReplaceOptions, IReLaunchOptions } from './types';

export const push = (options: IPushOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.push(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.push(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.push(options);
  } else if (isWeb) {
    return webModule.push(options);
  } else {
    throw new Error('Uni API：navigate.push暂不支持');
  }
};
export const go = (options: IGoOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.go(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.go(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.go(options);
  } else if (isWeb) {
    return webModule.go(options);
  } else {
    throw new Error('Uni API：navigate.go暂不支持');
  }
};
export const back = (options?: IPopOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.back(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.back(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.back(options);
  } else if (isWeb) {
    return webModule.back(options);
  } else {
    throw new Error('Uni API：navigate.back暂不支持');
  }
};
export const replace = (options: IReplaceOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.replace(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.replace(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.replace(options);
  } else if (isWeb) {
    return webModule.replace(options);
  } else {
    throw new Error('Uni API：navigate.replace暂不支持');
  }
};
export const reLaunch = (options: IReLaunchOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.reLaunch(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.reLaunch(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.reLaunch(options);
  } else if (isWeb) {
    return webModule.reLaunch(options);
  } else {
    throw new Error('Uni API：navigate.reLaunch暂不支持');
  }
};

export default {
  push,
  back,
  reLaunch,
  replace,
  go,
};
