import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from '@uni/env';
import aliMiniAppModule from './ali-miniapp/index';
import webModule from './web/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';
import {
  ChooseMediaOptions,
  ChooseVideoOptions,
  CreateVideoContextFn,
} from './types';

export const chooseVideo = (args: ChooseVideoOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.chooseVideo(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.chooseVideo(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.chooseVideo(args);
  } else if (isWeb) {
    return webModule.chooseVideo(args);
  } else {
    throw new Error('@uni/apis：chooseVideo暂不支持');
  }
};

export const createVideoContext: CreateVideoContextFn = (id, context) => {
  if (isWeChatMiniProgram) {
    return weChatModule.createVideoContext(id, context);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.createVideoContext(id, context);
  } else if (isMiniApp) {
    return aliMiniAppModule.createVideoContext(id);
  } else if (isWeb) {
    return webModule.createVideoContext();
  } else {
    throw new Error('@uni/apis：createVideoContext暂不支持');
  }
};

export const chooseMedia = (args: ChooseMediaOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.chooseMedia(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.chooseMedia(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.chooseMedia(args);
  } else if (isWeb) {
    return webModule.chooseMedia(args);
  } else {
    throw new Error('@uni/apis：chooseMedia暂不支持');
  }
};

export default {
  chooseVideo,
  createVideoContext,
};
