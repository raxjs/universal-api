module.exports = {
  Scan: {
    scan: {
      name: 'scanCode',
      optionsMap: {
        type: 'scanType'
      }
    }
  },
  ActionSheet: {
    show: {
      name: 'showActionSheet',
      optionsMap: {
        items: 'itemList',
      }
    }
  },
  File: {
    save: {
      name: 'saveFile',
      optionsMap: {
        filePath: 'tempFilePath'
      },
      responseMap: {
        filePath: 'savedFilePath'
      }
    },
    getInfo: {
      name: 'getFileInfo',
      optionsMap: {
        filePath: 'apFilePath'
      }
    },
    getSavedInfo: {
      name: 'getSavedFileInfo',
      optionsMap: {
        filePath: 'apFilePath'
      }
    },
    removeSaved: {
      name: 'removeSavedFile',
      optionsMap: {
        filePath: 'apFilePath'
      }
    },
    upload: {
      name: 'uploadFile',
      optionsMap: {
        fileName: 'name'
      }
    }
  },
  Image: {
    choose: {
      name: 'chooseImage',
      responseMap: {
        filePaths: 'tempFilePaths',
      }
    },
    compress: {
      name: 'compressImage',
      optionsMap: {
        filePath: 'src',
      }
    }
  }
};
