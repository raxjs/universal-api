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
  if (isWeb) {
    return webModule.chooseImage(args);
  } else if (isWeChatMiniProgram) {
    return weChatModule.chooseImage(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.chooseImage(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.chooseImage(args);
  } else {
    throw new Error('Uni API：chooseImage暂不支持');
  }
};

export const compressImage = (args: CompressImageOptions) => {
  if (isWeb) {
    return webModule.compressImage();
  } else if (isWeChatMiniProgram) {
    return weChatModule.compressImage(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.compressImage(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.compressImage(args);
  } else {
    throw new Error('Uni API：compressImage暂不支持');
  }
};

export const getImageInfo = (args: GetImageInfoOptions) => {
  if (isWeb) {
    return webModule.getImageInfo(args);
  } else if (isWeChatMiniProgram) {
    return weChatModule.getImageInfo(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.getImageInfo(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.getImageInfo(args);
  } else {
    throw new Error('Uni API：getImageInfo暂不支持');
  }
};

export const previewImage = (args: PreviewImageOptions) => {
  if (isWeb) {
    return webModule.previewImage(args);
  } else if (isWeChatMiniProgram) {
    return weChatModule.previewImage(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.previewImage(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.previewImage(args);
  } else {
    throw new Error('Uni API：previewImage暂不支持');
  }
};

export const saveImage = (args: SaveImageOptions) => {
  if (isWeb) {
    return webModule.saveImage();
  } else if (isWeChatMiniProgram) {
    return weChatModule.saveImage(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.saveImage(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.saveImage(args);
  } else {
    throw new Error('Uni API：saveImage暂不支持');
  }
};

export default {
  chooseImage,
  compressImage,
  getImageInfo,
  previewImage,
  saveImage,
};
