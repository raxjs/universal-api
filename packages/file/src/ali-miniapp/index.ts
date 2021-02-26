import { isDingdingMiniapp } from '../../../utils/miniappEnvApp';
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
} from '../types';
import { normalize } from '../common';

export const upload = normalize.upload((options: UploadOptions) => {
  const { url, filePath, fileName, fileType, hideLoading, header, formData, success, fail, complete } = options;
  const uploadFile = isDingdingMiniapp ? dd.uploadFile : my.uploadFile;
  uploadFile({
    url,
    filePath,
    fileName,
    fileType,
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

export const download = normalize.download((options: DownloadOptions) => {
  const { url, header, success, fail, complete } = options;
  const downloadFile = isDingdingMiniapp ? dd.downloadFile : my.downloadFile;
  downloadFile({
    url,
    header,
    success(res) {
      success && success({
        tempFilePath: res.apFilePath,
      });
    },
    fail(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res.apFilePath ? { tempFilePath: res.apFilePath } : res);
    },
  });
});

export const getInfo = normalize.getInfo((options: GetInfoOptions) => {
  const { filePath, digestAlgorithm, success, fail, complete } = options;
  const getFileInfo = isDingdingMiniapp ? dd.getFileInfo : my.getFileInfo;
  getFileInfo({
    apFilePath: filePath,
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
  const getSavedFileInfo = isDingdingMiniapp ? dd.getSavedFileInfo : my.getSavedFileInfo;
  getSavedFileInfo({
    apFilePath: filePath,
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
  const getSavedFileList = isDingdingMiniapp ? dd.getSavedFileList : my.getSavedFileList;
  getSavedFileList({
    success(res) {
      success && success({
        fileList: res.fileList.map((i) => ({
          size: i.size,
          createTime: i.createTime,
          filePath: i.apFilePath,
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
          filePath: i.apFilePath,
        })),
      } : res);
    },
  });
});
export const save = normalize.save((options: SaveOptions) => {
  const { tempFilePath, success, fail, complete } = options;
  const saveFile = isDingdingMiniapp ? dd.saveFile : my.saveFile;
  saveFile({
    apFilePath: tempFilePath,
    success(res) {
      success && success({
        savedFilePath: res.apFilePath,
      });
    },
    fail(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res.savedFilePath ? {
        savedFilePath: res.apFilePath,
      } : res);
    },
  });
});
export const removeSaved = normalize.removeSaved((options: RemoveSavedOptions) => {
  const { filePath, success, fail, complete } = options;
  const removeSavedFile = isDingdingMiniapp ? dd.removeSavedFile : my.removeSavedFile;
  removeSavedFile({
    apFilePath: filePath,
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
  const openDocumentApi = isDingdingMiniapp ? dd.openDocument : my.openDocument;
  openDocumentApi({
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
