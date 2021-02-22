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
  DownloadTask
} from '../types';
import {initApi} from '../common';

export const upload = initApi.upload((options: UploadOptions) => {
  let { url, filePath, fileName, hideLoading, header, formData, success, fail, complete } = options;
  wx.uploadFile({
    url,
    filePath, name: fileName, hideLoading, header, formData,
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

export const download = (options: DownloadOptions): DownloadTask => {
  let { url, header, success, fail, complete, ...rest } = options;
  return wx.downloadFile({
    url,
    header,
    ...rest,
    success: function(res) {
      success && success({
        tempFilePath: res.tempFilePath
      });
    },
    fail: function(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res.tempFilePath ? {
        tempFilePath: res.tempFilePath
      } : res);
    }
  });
};

export const getInfo = initApi.getInfo((options: GetInfoOptions) => {
  let { filePath, digestAlgorithm, success, fail, complete } = options;
  wx.getFileInfo({
    filePath,
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
  wx.getSavedFileInfo({
    filePath,
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
  wx.getSavedFileList({
    success: function(res) {
      success && success({
        fileList: res.fileList.map(i => ({
          size: i.size,
          createTime: i.createTime,
          filePath: i.filePath
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
          filePath: i.filePath
        })),
      } : res);
    }
  });
});
export const save = initApi.save((options: SaveOptions) => {
  let { tempFilePath, success, fail, complete } = options;
  wx.saveFile({
    tempFilePath,
    success: function(res) {
      success && success({
        savedFilePath: res.savedFilePath
      });
    },
    fail: function(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res.savedFilePath ? {
        savedFilePath: res.savedFilePath
      } : res);
    }
  });
});
export const removeSaved = initApi.removeSaved((options: RemoveSavedOptions) => {
  let { filePath, success, fail, complete } = options;
  wx.removeSavedFile({
    filePath,
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
  wx.openDocument({
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
