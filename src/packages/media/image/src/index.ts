import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp, isBaiduSmartProgram, isKuaiShouMiniProgram } from '@uni/env';
import aliMiniAppModule from './ali-miniapp/index';
import webModule from './web/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';
import kuaiShouModule from './kuaishou-miniprogram/index';
import baiDuModule from './baidu-smartprogram/index';
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
  } else if (isKuaiShouMiniProgram) {
    return kuaiShouModule.chooseImage(args);
  } else if (isBaiduSmartProgram) {
    return baiDuModule.chooseImage(args);
  } else if (isWeb) {
    return webModule.chooseImage(args);
  } else {
    throw new Error('Uni API：chooseImage暂不支持');
  }
};

export const compressImage = (args: CompressImageOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.compressImage(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.compressImage(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.compressImage(args);
  } else if (isKuaiShouMiniProgram) {
    return kuaiShouModule.compressImage(args);
  } else if (isBaiduSmartProgram) {
    return baiDuModule.compressImage(args);
  } else if (isWeb) {
    return webModule.compressImage();
  } else {
    throw new Error('Uni API：compressImage暂不支持');
  }
};

export const getImageInfo = (args: GetImageInfoOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.getImageInfo(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.getImageInfo(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.getImageInfo(args);
  } else if (isKuaiShouMiniProgram) {
    return kuaiShouModule.getImageInfo(args);
  } else if (isBaiduSmartProgram) {
    return baiDuModule.getImageInfo(args);
  } else if (isWeb) {
    return webModule.getImageInfo(args);
  } else {
    throw new Error('Uni API：getImageInfo暂不支持');
  }
};

export const previewImage = (args: PreviewImageOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.previewImage(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.previewImage(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.previewImage(args);
  } else if (isKuaiShouMiniProgram) {
    return kuaiShouModule.previewImage(args);
  } else if (isBaiduSmartProgram) {
    return baiDuModule.previewImage(args);
  } else if (isWeb) {
    return webModule.previewImage(args);
  } else {
    throw new Error('Uni API：previewImage暂不支持');
  }
};

export const saveImage = (args: SaveImageOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.saveImage(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.saveImage(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.saveImage(args);
  } else if (isKuaiShouMiniProgram) {
    return kuaiShouModule.saveImage(args);
  } else if (isBaiduSmartProgram) {
    return baiDuModule.saveImage(args);
  } else if (isWeb) {
    return webModule.saveImage();
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
