import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from '@uni/env';
import aliMiniAppModule from './ali-miniapp/index';
import webModule from './web/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';
import { StartOptions, StopOptions, SwitchOptions } from './types';

export const startPullDownRefresh = (args: StartOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.startPullDownRefresh(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.startPullDownRefresh(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.startPullDownRefresh(args);
  } else if (isWeb) {
    return webModule.startPullDownRefresh(args);
  } else {
    throw new Error('@uni/apis：startPullDownRefresh暂不支持');
  }
};

export const stopPullDownRefresh = (args: StopOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.stopPullDownRefresh(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.stopPullDownRefresh(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.stopPullDownRefresh(args);
  } else if (isWeb) {
    return webModule.stopPullDownRefresh(args);
  } else {
    throw new Error('@uni/apis：stopPullDownRefresh暂不支持');
  }
};

export const onPullDownRefresh = (args: SwitchOptions) => {
  if (isWeb) {
    return webModule.onPullDownRefresh(args);
  } else {
    throw new Error('@uni/apis：onPullDownRefresh暂不支持');
  }
};

export default {
  onPullDownRefresh,
  startPullDownRefresh,
  stopPullDownRefresh,
};
