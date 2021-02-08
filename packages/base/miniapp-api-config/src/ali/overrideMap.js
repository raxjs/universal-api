module.exports = {
  Share: {
    showShareMenu: {
      name: 'showSharePanel',
    },
  },
  Scan: {
    scan: {
      name: 'scan',
      optionsMap: {
        type: 'type'
      }
    }
  },
  ActionSheet: {
    show: {
      name: 'showActionSheet',
      optionsMap: {
        items: 'items',
      }
    }
  },
  File: {
    save: {
      name: 'saveFile',
      optionsMap: {
        filePath: 'apFilePath'
      },
      responseMap: {
        filePath: 'apFilePath'
      }
    },
    getInfo: {
      name: 'getFileInfo',
      optionsMap: {
        filePath: 'apFilePath'
      }
    },
    getSavedList: {
      name: 'getSavedFileList',
      responseMap: {
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
    download: {
      name: 'downloadFile',
      optionsMap: {
        tempFilePath: 'apFilePath'
      }
    }
  },
  Image: {
    choose: {
      name: 'chooseImage',
      responseMap: {
        filePaths: 'apFilePaths',
      }
    },
    compress: {
      name: 'compressImage',
      optionsMap: {
        filePath: 'apFilePaths',
      }
    }
  }
};
