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
} from './types';

export const uploadFile = (options: UploadOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.uploadFile(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.uploadFile(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.uploadFile(options);
  } else if (isWeb) {
    return webModule.uploadFile(options);
  } else {
    throw new Error('@uni：uploadFile暂不支持');
  }
};
export const downloadFile = (options: DownloadOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.downloadFile(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.downloadFile(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.downloadFile(options);
  } else if (isWeb) {
    return webModule.downloadFile(options);
  } else {
    throw new Error('@uni：downloadFile暂不支持');
  }
};
export const getFileInfo = (options: GetInfoOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.getFileInfo(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.getFileInfo(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.getFileInfo(options);
  } else if (isWeb) {
    return webModule.getFileInfo(options);
  } else {
    throw new Error('@uni：getFileInfo暂不支持');
  }
};
export const getSavedFileInfo = (options: GetSavedInfoOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.getSavedFileInfo(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.getSavedFileInfo(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.getSavedFileInfo(options);
  } else if (isWeb) {
    return webModule.getSavedFileInfo(options);
  } else {
    throw new Error('@uni：getSavedFileInfo暂不支持');
  }
};
export const getSavedFileList = (options: GetSavedListOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.getSavedFileList(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.getSavedFileList(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.getSavedFileList(options);
  } else if (isWeb) {
    return webModule.getSavedFileList(options);
  } else {
    throw new Error('@uni：getSavedFileList暂不支持');
  }
};
export const saveFile = (options: SaveOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.saveFile(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.saveFile(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.saveFile(options);
  } else if (isWeb) {
    return webModule.saveFile(options);
  } else {
    throw new Error('@uni：saveFile暂不支持');
  }
};
export const removeSavedFile = (options: RemoveSavedOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.removeSavedFile(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.removeSavedFile(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.removeSavedFile(options);
  } else if (isWeb) {
    return webModule.removeSavedFile(options);
  } else {
    throw new Error('@uni：removeSavedFile暂不支持');
  }
};
export const openDocument = (options: OpenDocumentOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.openDocument(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.openDocument(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.openDocument(options);
  } else if (isWeb) {
    return webModule.openDocument(options);
  } else {
    throw new Error('@uni：openDocument暂不支持');
  }
};
