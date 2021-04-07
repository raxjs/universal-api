import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from '@uni/env';
import aliMiniAppModule from './ali-miniapp/index';
import webModule from './web/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';
import {
  ChooseImageOptions,
  CompressImageOptions,
  GetImageInfoOptions,
  PreviewImageOptions,
  SaveImageOptions,
} from './types';

export const chooseImage = (args: ChooseImageOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.chooseImage(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.chooseImage(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.chooseImage(args);
  } else if (isWeb) {
    return webModule.chooseImage(args);
  } else {
    throw new Error('@uni/apis：chooseImage暂不支持');
  }
};

export const compressImage = (args: CompressImageOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.compressImage(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.compressImage(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.compressImage(args);
  } else if (isWeb) {
    return webModule.compressImage();
  } else {
    throw new Error('@uni/apis：compressImage暂不支持');
  }
};

export const getImageInfo = (args: GetImageInfoOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.getImageInfo(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.getImageInfo(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.getImageInfo(args);
  } else if (isWeb) {
    return webModule.getImageInfo(args);
  } else {
    throw new Error('@uni/apis：getImageInfo暂不支持');
  }
};

export const previewImage = (args: PreviewImageOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.previewImage(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.previewImage(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.previewImage(args);
  } else if (isWeb) {
    return webModule.previewImage();
  } else {
    throw new Error('@uni/apis：previewImage暂不支持');
  }
};

export const saveImage = (args: SaveImageOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.saveImage(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.saveImage(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.saveImage(args);
  } else if (isWeb) {
    return webModule.saveImage();
  } else {
    throw new Error('@uni/apis：saveImage暂不支持');
  }
};

export default {
  chooseImage,
  compressImage,
  getImageInfo,
  previewImage,
  saveImage,
};
