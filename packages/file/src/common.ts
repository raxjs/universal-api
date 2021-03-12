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

export const normalize = {
  upload: (api) => {
    return (options) => {
      const DEFAULT_REQUEST_OPTIONS = {
        hideLoading: false,
      };
      const afterOptions: UploadOptions = { ...DEFAULT_REQUEST_OPTIONS, ...options };
      return promisify(api)(afterOptions);
    };
  },
  download: (api) => {
    const formatRes = (res) => {
      return {
        ...res,
        tempFilePath: res.tempFilePath || res.apFilePath,
      };
    };

    return (options) => {
      const DEFAULT_REQUEST_OPTIONS: DownloadOptions = {
        url: '',
      };
      const afterOptions = { ...DEFAULT_REQUEST_OPTIONS,
        ...options,
        ...{
          success: (res) => {
            options.success && options.success(formatRes(res));
          },
          complete: (res) => {
            options.complete && options.complete(res.tempFilePath ? formatRes(res) : res);
          },
        } };
      return promisify(api)(afterOptions).then((res) => formatRes(res));
    };
  },
  getInfo: (api) => {
    const formatRes = (res) => {
      return {
        ...res,
        size: res.size,
      };
    };
    return (options) => {
      const DEFAULT_REQUEST_OPTIONS: GetInfoOptions = {
        filePath: '',
        digestAlgorithm: 'md5',
      };
      const afterOptions = { ...DEFAULT_REQUEST_OPTIONS,
        ...options,
        ...{
          success: (res) => {
            options.success && options.success(formatRes(res));
          },
          complete: (res) => {
            options.complete && options.complete(res.size ? formatRes(res) : res);
          },
        } };
      return promisify(api)(afterOptions).then((res) => formatRes(res));
    };
  },
  getSavedInfo: (api) => {
    return (options) => {
      const DEFAULT_REQUEST_OPTIONS: GetSavedInfoOptions = {
        filePath: '',
      };
      const afterOptions = { ...DEFAULT_REQUEST_OPTIONS,
        ...options,
        ...{
          success: (res) => {
            options.success && options.success(res);
          },
          complete: (res) => {
            options.complete && options.complete(res);
          },
        } };
      return promisify(api)(afterOptions);
    };
  },
  getSavedList: (api) => {
    const formatRes = (res) => {
      return {
        ...res,
        fileList: res.fileList.map((i) => ({
          size: i.size,
          createTime: i.createTime,
          filePath: i.filePath || i.apFilePath,
        })),
      };
    };
    return (options: GetSavedListOptions) => {
      const afterOptions = { ...options,
        ...{
          success: (res) => {
            options.success && options.success(formatRes(res));
          },
          complete: (res) => {
            options.complete && options.complete(res.fileList ? formatRes(res) : res);
          },
        } };
      return promisify(api)(afterOptions).then(formatRes);
    };
  },
  save: (api) => {
    const formatRes = (res) => {
      return {
        ...res,
        savedFilePath: res.savedFilePath || res.apFilePath,
      };
    };
    return (options: SaveOptions) => {
      const DEFAULT_REQUEST_OPTIONS: SaveOptions = {
        tempFilePath: '',
      };
      const afterOptions = { ...DEFAULT_REQUEST_OPTIONS,
        ...options,
        ...{
          success: (res) => {
            options.success && options.success(formatRes(res));
          },
          complete: (res) => {
            options.complete && options.complete(res.size ? formatRes(res) : res);
          },
        } };
      return promisify(api)(afterOptions).then(formatRes);
    };
  },
  removeSaved: (api) => {
    return (options: RemoveSavedOptions) => {
      const DEFAULT_REQUEST_OPTIONS: RemoveSavedOptions = {
        filePath: '',
      };
      const afterOptions = { ...DEFAULT_REQUEST_OPTIONS, ...options };
      return promisify(api)(afterOptions);
    };
  },
  openDocument: (api) => {
    return (options: OpenDocumentOptions) => {
      const DEFAULT_REQUEST_OPTIONS: OpenDocumentOptions = {
        filePath: '',
        fileType: 'pdf',
      };
      const afterOptions = { ...DEFAULT_REQUEST_OPTIONS, ...options };
      return promisify(api)(afterOptions);
    };
  },
};
