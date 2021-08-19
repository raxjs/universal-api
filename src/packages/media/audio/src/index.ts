import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp, isBaiduSmartProgram, isKuaiShouMiniProgram } from '@uni/env';
import aliMiniAppModule from './ali-miniapp/index';
import webModule from './web/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';
import baiDuModule from './baidu-smartprogram/index';
import kuaiShouModule from './kuaishou-miniprogram/index';
import {
  AudioContextOptions,
  CreateAudioContextFn,
} from './types';

export const createAudioContext: CreateAudioContextFn = (args?: AudioContextOptions) => {
  if (isWeb) {
    return webModule.createAudioContext();
  } else if (isKuaiShouMiniProgram) {
    return kuaiShouModule.createAudioContext();
  } else if (isWeChatMiniProgram) {
    return weChatModule.createAudioContext(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.createAudioContext();
  } else if (isMiniApp) {
    return aliMiniAppModule.createAudioContext();
  } else if (isBaiduSmartProgram) {
    return baiDuModule.createAudioContext();
  } else {
    throw new Error('@uni/apis：createInnerAudioContext暂不支持');
  }
};

export default {
  createAudioContext,
};
