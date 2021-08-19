import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp, isBaiduSmartProgram, isKuaiShouMiniProgram } from '@uni/env';
import aliMiniAppModule from './ali-miniapp/index';
import webModule from './web/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';
import baiDuModule from './baidu-smartprogram/index';
import kuaiShouModule from './kuaishou-miniprogram/index';
import {
  InnerAudioContextOptions,
  CreateInnerAudioContextFn,
} from './types';

export const createInnerAudioContext: CreateInnerAudioContextFn = (args?: InnerAudioContextOptions) => {
  if (isWeb) {
    return webModule.createInnerAudioContext();
  } else if (isKuaiShouMiniProgram) {
    return kuaiShouModule.createInnerAudioContext();
  } else if (isWeChatMiniProgram) {
    return weChatModule.createInnerAudioContext(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.createInnerAudioContext();
  } else if (isMiniApp) {
    return aliMiniAppModule.createInnerAudioContext();
  } else if (isBaiduSmartProgram) {
    return baiDuModule.createInnerAudioContext();
  } else {
    throw new Error('@uni/apis：createInnerAudioContext暂不支持');
  }
};

export default {
  createInnerAudioContext,
};
