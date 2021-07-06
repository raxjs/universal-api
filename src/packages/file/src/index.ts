import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from '@uni/env';
import * as aliMiniAppModule from './ali-miniapp/index';
import * as weChatModule from './wechat-miniprogram/index';
import * as bytedanceModule from './bytedance-microapp/index';
import * as webModule from './web/index';
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
  if (isWeb) {
    return webModule.upload(options);
  } else if (isWeChatMiniProgram) {
    return weChatModule.upload(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.upload(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.upload(options);
  } else {
    throw new Error('@uni：upload暂不支持');
  }
};
export const download = (options: DownloadOptions) => {
  if (isWeb) {
    return webModule.download(options);
  } else if (isWeChatMiniProgram) {
    return weChatModule.download(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.download(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.download(options);
  } else {
    throw new Error('@uni：download暂不支持');
  }
};
export const getInfo = (options: GetInfoOptions) => {
  if (isWeb) {
    return webModule.getInfo(options);
  } else if (isWeChatMiniProgram) {
    return weChatModule.getInfo(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.getInfo(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.getInfo(options);
  } else {
    throw new Error('@uni：getInfo暂不支持');
  }
};
export const getSavedInfo = (options: GetSavedInfoOptions) => {
  if (isWeb) {
    return webModule.getSavedInfo(options);
  } else if (isWeChatMiniProgram) {
    return weChatModule.getSavedInfo(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.getSavedInfo(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.getSavedInfo(options);
  } else {
    throw new Error('@uni：getSavedInfo暂不支持');
  }
};
export const getSavedList = (options: GetSavedListOptions) => {
  if (isWeb) {
    return webModule.getSavedList(options);
  } else if (isWeChatMiniProgram) {
    return weChatModule.getSavedList(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.getSavedList(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.getSavedList(options);
  } else {
    throw new Error('@uni：getSavedList暂不支持');
  }
};
export const save = (options: SaveOptions) => {
  if (isWeb) {
    return webModule.save(options);
  } else if (isWeChatMiniProgram) {
    return weChatModule.save(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.save(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.save(options);
  } else {
    throw new Error('@uni：save暂不支持');
  }
};
export const removeSaved = (options: RemoveSavedOptions) => {
  if (isWeb) {
    return webModule.removeSaved(options);
  } else if (isWeChatMiniProgram) {
    return weChatModule.removeSaved(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.removeSaved(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.removeSaved(options);
  } else {
    throw new Error('@uni：removeSaved暂不支持');
  }
};
export const openDocument = (options: OpenDocumentOptions) => {
  if (isWeb) {
    return webModule.openDocument(options);
  } else if (isWeChatMiniProgram) {
    return weChatModule.openDocument(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.openDocument(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.openDocument(options);
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
