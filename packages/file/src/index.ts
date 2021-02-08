import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from '@uni/env';
import aliMiniAppModule from './ali-miniapp/index';
import weChatModule from './wechat-miniapp/index';
import bytedanceModule from './byte-miniapp/index';
import webModule from './web/index';
import {
  DownloadOptions,
  GetInfoOptions,
  GetSavedInfoOptions,
  GetSavedListOptions,
  SaveOptions,
  RemoveSavedOptions,
  OpenDocumentOptions,
  UploadOptions,
  IFile,
} from './types';

export const upload = (options: UploadOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.upload(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.upload(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.upload(options);
  } else if (isWeb) {
    return webModule.upload(options);
  } else {
    throw new Error('@uni/apis：file.upload暂不支持');
  }
};
export const download = (options: DownloadOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.download(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.download(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.download(options);
  } else if (isWeb) {
    return webModule.download(options);
  } else {
    throw new Error('@uni/apis：file.download暂不支持');
  }
};
export const getInfo = (options: GetInfoOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.getInfo(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.getInfo(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.getInfo(options);
  } else if (isWeb) {
    return webModule.getInfo(options);
  } else {
    throw new Error('@uni/apis：file.getInfo暂不支持');
  }
};
export const getSavedInfo = (options: GetSavedInfoOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.getSavedInfo(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.getSavedInfo(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.getSavedInfo(options);
  } else if (isWeb) {
    return webModule.getSavedInfo(options);
  } else {
    throw new Error('@uni/apis：file.getSavedInfo暂不支持');
  }
};
export const getSavedList = (options: GetSavedListOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.getSavedList(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.getSavedList(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.getSavedList(options);
  } else if (isWeb) {
    return webModule.getSavedList(options);
  } else {
    throw new Error('@uni/apis：file.getSavedList暂不支持');
  }
};
export const save = (options: SaveOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.save(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.save(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.save(options);
  } else if (isWeb) {
    return webModule.save(options);
  } else {
    throw new Error('@uni/apis：file.save暂不支持');
  }
};
export const removeSaved = (options: RemoveSavedOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.removeSaved(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.removeSaved(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.removeSaved(options);
  } else if (isWeb) {
    return webModule.removeSaved(options);
  } else {
    throw new Error('@uni/apis：file.removeSaved暂不支持');
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
    throw new Error('@uni/apis：file.openDocument暂不支持');
  }
};
let res: IFile;
if (isWeChatMiniProgram) {
  res = weChatModule;
} else if (isByteDanceMicroApp) {
  res = bytedanceModule;
} else if (isMiniApp) {
  res = aliMiniAppModule;
} else if (isWeb) {
  res = webModule;
} else {
  throw new Error('@uni/apis：file暂不支持');
}
export default res;