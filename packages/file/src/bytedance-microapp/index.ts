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
import { initApi } from '../common';

export const upload = initApi.upload((options: UploadOptions) => {
  const { url, filePath, fileName, hideLoading, header, formData, success, fail, complete } = options;
  tt.uploadFile({
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
  const { url, header, success, fail, complete } = options;
  return tt.downloadFile({
    url,
    header,
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

export const getInfo = initApi.getInfo((options: GetInfoOptions) => {
  const { filePath, success, fail, complete } = options;
  tt.getFileInfo({
    filePath,
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
export const getSavedInfo = initApi.getSavedInfo((options: GetSavedInfoOptions) => {
  const { filePath, success, fail, complete } = options;
  tt.getFileInfo({
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

export const getSavedList = initApi.getSavedList((options: GetSavedListOptions) => {
  const { success, fail, complete } = options;
  tt.getSavedFileList({
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
export const save = initApi.save((options: SaveOptions) => {
  const { tempFilePath, success, fail, complete } = options;
  tt.saveFile({
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
export const removeSaved = initApi.removeSaved((options: RemoveSavedOptions) => {
  const { filePath, success, fail, complete } = options;
  tt.removeSavedFile({
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

export const openDocument = initApi.openDocument((options: OpenDocumentOptions) => {
  const { filePath, fileType, success, fail, complete } = options;
  tt.openDocument({
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
