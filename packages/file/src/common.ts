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
import { promisify } from '../../utils/promisify';

export const initApi = {
  upload: (api) => {
    return (options) => {
      const DEFAULT_REQUEST_OPTIONS = {
        hideLoading: false,
      };
      const afterOptions: UploadOptions = {...DEFAULT_REQUEST_OPTIONS, ...options};
      return promisify(api)(afterOptions);
    };
  },
  download: (api) => {
    return (options) => {
      const DEFAULT_REQUEST_OPTIONS: DownloadOptions = {
        url: '',
      };
      const afterOptions = {...DEFAULT_REQUEST_OPTIONS, ...options, ...{
        success: (res) => {
          options.success && options.success({
            tempFilePath: res.tempFilePath
          });
        },
        complete: (res) => {
          options.complete && options.complete(res.tempFilePath ? {
            tempFilePath: res.tempFilePath
          } : res);
        }
      }};
      return promisify(api)(afterOptions);
    };
  },
  getInfo: (api) => {
    return (options) => {
      const DEFAULT_REQUEST_OPTIONS: GetInfoOptions = {
        filePath: '',
        digestAlgorithm: 'md5',
      };
      const afterOptions = {...DEFAULT_REQUEST_OPTIONS, ...options, ...{
        success: (res) => {
          options.success && options.success({
            size: res.size,
          });
        },
        complete: (res) => {
          options.complete && options.complete(res.size ? {
            size: res.size,
          } : res);
        }
      }};
      return promisify(api)(afterOptions);
    };
  },
  getSavedInfo: (api) => {
    return (options) => {
      const DEFAULT_REQUEST_OPTIONS: GetSavedInfoOptions = {
        filePath: '',
      };
      const afterOptions = {...DEFAULT_REQUEST_OPTIONS, ...options, ...{
        success: (res) => {
          options.success && options.success({
            size: res.size,
            createTime: res.createTime,
          });
        },
        complete: (res) => {
          options.complete && options.complete(res.size ? {
            size: res.size,
            createTime: res.createTime,
          } : res);
        }
      }};
      return promisify(api)(afterOptions);
    };
  },
  getSavedList: (api) => {
    return (options: GetSavedListOptions) => {
      const afterOptions = {...options, ...{
        success: (res) => {
          options.success && options.success({
            fileList: res.fileList.map(i => ({
              size: i.size,
              createTime: i.createTime,
              filePath: i.filePath
            })),
          });
        },
        complete: (res) => {
          options.complete && options.complete(res.fileList ? {
            fileList: res.fileList.map(i => ({
              size: i.size,
              createTime: i.createTime,
              filePath: i.filePath
            })),
          } : res);
        }
      }};
      return promisify(api)(afterOptions);
    };
  },
  save: (api) => {
    return (options: SaveOptions) => {
      const DEFAULT_REQUEST_OPTIONS: SaveOptions = {
        tempFilePath: '',
      };
      const afterOptions = {...DEFAULT_REQUEST_OPTIONS, ...options, ...{
        success: (res) => {
          options.success && options.success({
            savedFilePath: res.savedFilePath || res.apFilePath,
          });
        },
        complete: (res) => {
          options.complete && options.complete(res.size ? {
            savedFilePath: res.savedFilePath || res.apFilePath,
          } : res);
        }
      }};
      return promisify(api)(afterOptions);
    };
  },
  removeSaved: (api) => {
    return (options: RemoveSavedOptions) => {
      const DEFAULT_REQUEST_OPTIONS: RemoveSavedOptions = {
        filePath: '',
      };
      const afterOptions = {...DEFAULT_REQUEST_OPTIONS, ...options};
      return promisify(api)(afterOptions);
    };
  },
  openDocument: (api) => {
    return (options: OpenDocumentOptions) => {
      const DEFAULT_REQUEST_OPTIONS: OpenDocumentOptions = {
        filePath: '',
        fileType: 'pdf'
      };
      const afterOptions = {...DEFAULT_REQUEST_OPTIONS, ...options};
      return promisify(api)(afterOptions);
    };
  },
};