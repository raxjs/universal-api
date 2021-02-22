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
import {initApi} from '../common';

export const upload = initApi.upload((options: UploadOptions) => {
  let { url, filePath, fileName, fileType, hideLoading, header, formData, success, fail, complete } = options;
  const upload = isDingdingMiniapp ? dd.uploadFile : my.uploadFile;
  upload({
    url,
    filePath, fileName, fileType, hideLoading, header, formData,
    success: function(res) {
      success && success(res);
    },
    fail: function(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res);
    }
  });
});

export const download = initApi.download((options: DownloadOptions) => {
  let { url, header, success, fail, complete } = options;
  const downloadFile = isDingdingMiniapp ? dd.downloadFile : my.downloadFile;
  downloadFile({
    url,
    header,
    success: function(res) {
      success && success({
        tempFilePath: res.apFilePath
      });
    },
    fail: function(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res.apFilePath ? {tempFilePath: res.apFilePath} : res);
    }
  });
});

export const getInfo = initApi.getInfo((options: GetInfoOptions) => {
  let { filePath, digestAlgorithm, success, fail, complete } = options;
  const getFileInfo = isDingdingMiniapp ? dd.getFileInfo : my.getFileInfo;
  getFileInfo({
    apFilePath: filePath,
    digestAlgorithm,
    success: function(res: GetInfoResponseData) {
      success && success(res);
    },
    fail: function(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res);
    }
  });
});
export const getSavedInfo = initApi.getSavedInfo((options: GetSavedInfoOptions) => {
  let { filePath, success, fail, complete } = options;
  const getSavedFileInfo = isDingdingMiniapp ? dd.getSavedFileInfo : my.getSavedFileInfo;
  getSavedFileInfo({
    apFilePath: filePath,
    success: function(res: GetSavedInfoResponseData) {
      success && success(res);
    },
    fail: function(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res);
    }
  });
});

export const getSavedList = initApi.getSavedList((options: GetSavedListOptions) => {
  let { success, fail, complete } = options;
  const getSavedFileList = isDingdingMiniapp ? dd.getSavedFileList : my.getSavedFileList;
  getSavedFileList({
    success: function(res) {
      success && success({
        fileList: res.fileList.map(i => ({
          size: i.size,
          createTime: i.createTime,
          filePath: i.apFilePath
        })),
      });
    },
    fail: function(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res.fileList ? {
        fileList: res.fileList.map(i => ({
          size: i.size,
          createTime: i.createTime,
          filePath: i.apFilePath
        })),
      } : res);
    }
  });
});
export const save = initApi.save((options: SaveOptions) => {
  let { tempFilePath, success, fail, complete } = options;
  const saveFile = isDingdingMiniapp ? dd.saveFile : my.saveFile;
  saveFile({
    apFilePath: tempFilePath,
    success: function(res) {
      success && success({
        savedFilePath: res.apFilePath
      });
    },
    fail: function(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res.savedFilePath ? {
        savedFilePath: res.apFilePath
      } : res);
    }
  });
});
export const removeSaved = initApi.removeSaved((options: RemoveSavedOptions) => {
  let { filePath, success, fail, complete } = options;
  const removeSavedFile = isDingdingMiniapp ? dd.removeSavedFile : my.removeSavedFile;
  removeSavedFile({
    apFilePath: filePath,
    success: function() {
      success && success();
    },
    fail: function(res) {
      fail && fail(res);
    },
    complete(res?) {
      complete && complete(res);
    }
  });
});

export const openDocument = initApi.openDocument((options: OpenDocumentOptions) => {
  let { filePath, fileType, success, fail, complete } = options;
  const openDocument = isDingdingMiniapp ? dd.openDocument : my.openDocument;
  openDocument({
    filePath,
    fileType,
    success: function() {
      success && success();
    },
    fail: function(res) {
      fail && fail(res);
    },
    complete(res?) {
      complete && complete(res);
    }
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
