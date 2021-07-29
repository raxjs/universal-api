import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp, isKuaiShouMiniProgram, isBaiduSmartProgram } from '@uni/env';
import * as aliMiniAppModule from './ali-miniapp/index';
import * as weChatModule from './wechat-miniprogram/index';
import * as bytedanceModule from './bytedance-microapp/index';
import * as webModule from './web/index';
import * as kuaiShouModule from './kuaishou-miniprogram/index';
import * as baiDuModule from './baidu-smartprogram/index';
import {
  DownloadOptions,
  GetInfoOptions,
  GetSavedInfoOptions,
  GetSavedListOptions,
  SaveOptions,
  RemoveSavedOptions,
  OpenDocumentOptions,
  UploadOptions,
  UploadTask,
} from './types';

export const upload = (options: UploadOptions): UploadTask | void => {
  if (isWeChatMiniProgram) {
    return weChatModule.upload(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.upload(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.upload(options);
  } else if (isKuaiShouMiniProgram) {
    return kuaiShouModule.upload(options);
  } else if (isBaiduSmartProgram) {
    return baiDuModule.upload(options);
  } else if (isWeb) {
    return webModule.upload(options);
  } else {
    throw new Error('@uni：upload暂不支持');
  }
};
export const download = (options: DownloadOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.download(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.download(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.download(options);
  } else if (isKuaiShouMiniProgram) {
    return kuaiShouModule.download(options);
  } else if (isBaiduSmartProgram) {
    return baiDuModule.download(options);
  } else if (isWeb) {
    return webModule.download(options);
  } else {
    throw new Error('@uni：download暂不支持');
  }
};
export const getInfo = (options: GetInfoOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.getInfo(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.getInfo(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.getInfo(options);
  } else if (isKuaiShouMiniProgram) {
    return kuaiShouModule.getInfo(options);
  } else if (isBaiduSmartProgram) {
    return baiDuModule.getInfo(options);
  } else if (isWeb) {
    return webModule.getInfo(options);
  } else {
    throw new Error('@uni：getInfo暂不支持');
  }
};
export const getSavedInfo = (options: GetSavedInfoOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.getSavedInfo(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.getSavedInfo(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.getSavedInfo(options);
  } else if (isKuaiShouMiniProgram) {
    return kuaiShouModule.getSavedInfo(options);
  } else if (isBaiduSmartProgram) {
    return baiDuModule.getSavedInfo(options);
  } else if (isWeb) {
    return webModule.getSavedInfo(options);
  } else {
    throw new Error('@uni：getSavedInfo暂不支持');
  }
};
export const getSavedList = (options: GetSavedListOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.getSavedList(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.getSavedList(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.getSavedList(options);
  } else if (isKuaiShouMiniProgram) {
    return kuaiShouModule.getSavedList(options);
  } else if (isBaiduSmartProgram) {
    return baiDuModule.getSavedList(options);
  } else if (isWeb) {
    return webModule.getSavedList(options);
  } else {
    throw new Error('@uni：getSavedList暂不支持');
  }
};
export const save = (options: SaveOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.save(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.save(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.save(options);
  } else if (isKuaiShouMiniProgram) {
    return kuaiShouModule.save(options);
  } else if (isBaiduSmartProgram) {
    return baiDuModule.save(options);
  } else if (isWeb) {
    return webModule.save(options);
  } else {
    throw new Error('@uni：save暂不支持');
  }
};
export const removeSaved = (options: RemoveSavedOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.removeSaved(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.removeSaved(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.removeSaved(options);
  } else if (isKuaiShouMiniProgram) {
    return kuaiShouModule.removeSaved(options);
  } else if (isBaiduSmartProgram) {
    return baiDuModule.removeSaved(options);
  } else if (isWeb) {
    return webModule.removeSaved(options);
  } else {
    throw new Error('@uni：removeSaved暂不支持');
  }
};
export const openDocument = (options: OpenDocumentOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.openDocument(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.openDocument(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.openDocument(options);
  } else if (isKuaiShouMiniProgram) {
    return kuaiShouModule.openDocument(options);
  } else if (isBaiduSmartProgram) {
    return baiDuModule.openDocument(options);
  } else if (isWeb) {
    return webModule.openDocument(options);
  } else {
    throw new Error('@uni：openDocument暂不支持');
  }
};
export default {
  openDocument,
  removeSaved,
  upload,
  save,
  getSavedList,
  getSavedInfo,
  getInfo,
  download,
};
