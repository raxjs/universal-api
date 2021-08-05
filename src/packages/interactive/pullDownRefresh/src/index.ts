import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp, isKuaiShouMiniProgram, isBaiduSmartProgram } from '@uni/env';
import aliMiniAppModule from './ali-miniapp/index';
import webModule from './web/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';
import kuaiShouModule from './kuaishou-miniprogram/index';
import baiDuModule from './baidu-smartprogram/index';
import { StartOptions, StopOptions, SwitchOptions } from './types';

export const startPullDownRefresh = (args?: StartOptions) => {
  if (isWeb) {
    return webModule.startPullDownRefresh(args);
  } else if (isKuaiShouMiniProgram) {
    return kuaiShouModule.startPullDownRefresh(args);
  } else if (isWeChatMiniProgram) {
    return weChatModule.startPullDownRefresh(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.startPullDownRefresh(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.startPullDownRefresh(args);
  } else if (isBaiduSmartProgram) {
    return baiDuModule.startPullDownRefresh(args);
  } else {
    throw new Error('Uni API：startPullDownRefresh暂不支持');
  }
};

export const stopPullDownRefresh = (args?: StopOptions) => {
  if (isWeb) {
    return webModule.stopPullDownRefresh(args);
  } else if (isKuaiShouMiniProgram) {
    return kuaiShouModule.stopPullDownRefresh(args);
  } else if (isWeChatMiniProgram) {
    return weChatModule.stopPullDownRefresh(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.stopPullDownRefresh(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.stopPullDownRefresh(args);
  } else if (isBaiduSmartProgram) {
    return baiDuModule.stopPullDownRefresh(args);
  } else {
    throw new Error('Uni API：stopPullDownRefresh暂不支持');
  }
};

export const onPullDownRefresh = (args?: SwitchOptions) => {
  if (isWeb) {
    return webModule.onPullDownRefresh(args);
  } else {
    console.warn('Uni API：onPullDownRefresh暂不支持,只支持web端h5页面');
  }
};

export default {
  onPullDownRefresh,
  startPullDownRefresh,
  stopPullDownRefresh,
};
