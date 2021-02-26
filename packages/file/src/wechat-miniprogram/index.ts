import {
  DownloadOptions,
  GetInfoResponseData,
  GetInfoOptions,
  GetSavedInfoResponseData,
  GetSavedInfoOptions,
  GetSavedListOptions,
  SaveOptions,
  RemoveSavedOptions,
  OpenDocumentOptions,
  UploadOptions,
  DownloadTask,
} from '../types';
import { normalize } from '../common';

export const upload = normalize.upload((options: UploadOptions) => {
  const { url, filePath, fileName, hideLoading, header, formData, success, fail, complete } = options;
  wx.uploadFile({
    url,
    filePath,
    name: fileName,
    hideLoading,
    header,
    formData,
    success(res) {
      success && success(res);
    },
    fail(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res);
    },
  });
});

export const download = (options: DownloadOptions): DownloadTask => {
  const { url, header, success, fail, complete, ...rest } = options;
  return wx.downloadFile({
    url,
    header,
    ...rest,
    success(res) {
      success && success({
        tempFilePath: res.tempFilePath,
      });
    },
    fail(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res.tempFilePath ? {
        tempFilePath: res.tempFilePath,
      } : res);
    },
  });
};

export const getInfo = normalize.getInfo((options: GetInfoOptions) => {
  const { filePath, digestAlgorithm, success, fail, complete } = options;
  wx.getFileInfo({
    filePath,
    digestAlgorithm,
    success(res: GetInfoResponseData) {
      success && success(res);
    },
    fail(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res);
    },
  });
});
export const getSavedInfo = normalize.getSavedInfo((options: GetSavedInfoOptions) => {
  const { filePath, success, fail, complete } = options;
  wx.getSavedFileInfo({
    filePath,
    success(res: GetSavedInfoResponseData) {
      success && success(res);
    },
    fail(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res);
    },
  });
});

export const getSavedList = normalize.getSavedList((options: GetSavedListOptions) => {
  const { success, fail, complete } = options;
  wx.getSavedFileList({
    success(res) {
      success && success({
        fileList: res.fileList.map((i) => ({
          size: i.size,
          createTime: i.createTime,
          filePath: i.filePath,
        })),
      });
    },
    fail(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res.fileList ? {
        fileList: res.fileList.map((i) => ({
          size: i.size,
          createTime: i.createTime,
          filePath: i.filePath,
        })),
      } : res);
    },
  });
});
export const save = normalize.save((options: SaveOptions) => {
  const { tempFilePath, success, fail, complete } = options;
  wx.saveFile({
    tempFilePath,
    success(res) {
      success && success({
        savedFilePath: res.savedFilePath,
      });
    },
    fail(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res.savedFilePath ? {
        savedFilePath: res.savedFilePath,
      } : res);
    },
  });
});
export const removeSaved = normalize.removeSaved((options: RemoveSavedOptions) => {
  const { filePath, success, fail, complete } = options;
  wx.removeSavedFile({
    filePath,
    success() {
      success && success();
    },
    fail(res) {
      fail && fail(res);
    },
    complete(res?) {
      complete && complete(res);
    },
  });
});

export const openDocument = normalize.openDocument((options: OpenDocumentOptions) => {
  const { filePath, fileType, success, fail, complete } = options;
  wx.openDocument({
    filePath,
    fileType,
    success() {
      success && success();
    },
    fail(res) {
      fail && fail(res);
    },
    complete(res?) {
      complete && complete(res);
    },
  });
});

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
