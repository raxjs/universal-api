import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp, isKuaiShouMiniProgram, isBaiduSmartProgram } from '@uni/env';
import aliMiniAppModule from './ali-miniapp/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';
import webModule from './web/index';
import kuaiShouModule from './kuaishou-miniprogram/index';
import baiDuModule from './baidu-smartprogram/index';
import { IPushOptions, IGoOptions, IPopOptions, IReplaceOptions, IReLaunchOptions } from './types';

export const push = (options: IPushOptions) => {
  if (isWeb) {
    return webModule.push(options);
  } else if (isKuaiShouMiniProgram) {
    return kuaiShouModule.push(options);
  } else if (isWeChatMiniProgram) {
    return weChatModule.push(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.push(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.push(options);
  } else if (isBaiduSmartProgram) {
    return baiDuModule.push(options);
  } else {
    throw new Error('Uni API：navigate.push暂不支持');
  }
};
export const go = (options: IGoOptions) => {
  if (isWeb) {
    return webModule.go(options);
  } else if (isKuaiShouMiniProgram) {
    return kuaiShouModule.go(options);
  } else if (isWeChatMiniProgram) {
    return weChatModule.go(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.go(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.go(options);
  } else if (isBaiduSmartProgram) {
    return baiDuModule.go(options);
  } else {
    throw new Error('Uni API：navigate.go暂不支持');
  }
};
export const back = (options?: IPopOptions) => {
  if (isWeb) {
    return webModule.back(options);
  } else if (isKuaiShouMiniProgram) {
    return kuaiShouModule.back(options);
  } else if (isWeChatMiniProgram) {
    return weChatModule.back(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.back(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.back(options);
  } else if (isBaiduSmartProgram) {
    return baiDuModule.back(options);
  } else {
    throw new Error('Uni API：navigate.back暂不支持');
  }
};
export const replace = (options: IReplaceOptions) => {
  if (isWeb) {
    return webModule.replace(options);
  } else if (isKuaiShouMiniProgram) {
    return kuaiShouModule.replace(options);
  } else if (isWeChatMiniProgram) {
    return weChatModule.replace(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.replace(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.replace(options);
  } else if (isBaiduSmartProgram) {
    return baiDuModule.replace(options);
  } else {
    throw new Error('Uni API：navigate.replace暂不支持');
  }
};
export const reLaunch = (options: IReLaunchOptions) => {
  if (isWeb) {
    return webModule.reLaunch(options);
  } else if (isKuaiShouMiniProgram) {
    return kuaiShouModule.reLaunch(options);
  } else if (isWeChatMiniProgram) {
    return weChatModule.reLaunch(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.reLaunch(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.reLaunch(options);
  } else if (isBaiduSmartProgram) {
    return baiDuModule.reLaunch(options);
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
