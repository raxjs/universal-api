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
import { promisify } from '@utils/promisify';
import { styleIn } from '@utils/styleOptions';

export const normalize = {
  upload: (api, containerName) => {
    return (options) => {
      const DEFAULT_REQUEST_OPTIONS = {
        hideLoading: false,
      };
      const afterOptions: UploadOptions = { ...DEFAULT_REQUEST_OPTIONS, ...styleIn(options, containerName) };
      return api(afterOptions);
    };
  },
  download: (api, containerName) => {
    const formatRes = (res) => {
      return {
        ...res,
        tempFilePath: res.tempFilePath || res.apFilePath,
      };
    };

    return (options) => {
      const _options = styleIn(options, containerName);
      const DEFAULT_REQUEST_OPTIONS: DownloadOptions = {
        url: '',
      };
      const afterOptions = { ...DEFAULT_REQUEST_OPTIONS,
        ..._options,
        ...{
          success: (res) => {
            _options.success && _options.success(formatRes(res));
          },
          complete: (res) => {
            _options.complete && _options.complete(res.tempFilePath ? formatRes(res) : res);
          },
        } };
      return api(afterOptions);
    };
  },
  getInfo: (api, containerName) => {
    const formatRes = (res) => {
      return {
        ...res,
        size: res.size,
      };
    };
    return (options) => {
      const _options = styleIn(options, containerName);
      const DEFAULT_REQUEST_OPTIONS: GetInfoOptions = {
        filePath: '',
        digestAlgorithm: 'md5',
      };
      const afterOptions = { ...DEFAULT_REQUEST_OPTIONS,
        ..._options,
        ...{
          success: (res) => {
            _options.success && _options.success(formatRes(res));
          },
          complete: (res) => {
            _options.complete && _options.complete(res.size ? formatRes(res) : res);
          },
        } };
      return promisify(api)(afterOptions).then((res) => formatRes(res));
    };
  },
  getSavedInfo: (api, containerName) => {
    return (options) => {
      const _options = styleIn(options, containerName);
      const DEFAULT_REQUEST_OPTIONS: GetSavedInfoOptions = {
        filePath: '',
      };
      const afterOptions = { ...DEFAULT_REQUEST_OPTIONS,
        ..._options,
        ...{
          success: (res) => {
            _options.success && _options.success(res);
          },
          complete: (res) => {
            _options.complete && _options.complete(res);
          },
        } };
      return promisify(api)(afterOptions);
    };
  },
  getSavedList: (api, containerName) => {
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
      const _options = styleIn(options, containerName);
      const afterOptions = { ..._options,
        ...{
          success: (res) => {
            _options.success && _options.success(formatRes(res));
          },
          complete: (res) => {
            _options.complete && _options.complete(res.fileList ? formatRes(res) : res);
          },
        } };
      return promisify(api)(afterOptions).then(formatRes);
    };
  },
  save: (api, containerName) => {
    const formatRes = (res) => {
      return {
        ...res,
        savedFilePath: res.savedFilePath || res.apFilePath,
      };
    };
    return (options: SaveOptions) => {
      const _options = styleIn(options, containerName);
      const DEFAULT_REQUEST_OPTIONS: SaveOptions = {
        tempFilePath: '',
      };
      const afterOptions = { ...DEFAULT_REQUEST_OPTIONS,
        ..._options,
        ...{
          success: (res) => {
            _options.success && _options.success(formatRes(res));
          },
          complete: (res) => {
            _options.complete && _options.complete(res.size ? formatRes(res) : res);
          },
        } };
      return promisify(api)(afterOptions).then(formatRes);
    };
  },
  removeSaved: (api, containerName) => {
    return (options: RemoveSavedOptions) => {
      const _options = styleIn(options, containerName);
      const DEFAULT_REQUEST_OPTIONS: RemoveSavedOptions = {
        filePath: '',
      };
      const afterOptions = { ...DEFAULT_REQUEST_OPTIONS, ..._options };
      return promisify(api)(afterOptions);
    };
  },
  openDocument: (api, containerName) => {
    return (options: OpenDocumentOptions) => {
      const _options = styleIn(options, containerName);
      const DEFAULT_REQUEST_OPTIONS: OpenDocumentOptions = {
        filePath: '',
        fileType: 'pdf',
      };
      const afterOptions = { ...DEFAULT_REQUEST_OPTIONS, ..._options };
      return promisify(api)(afterOptions);
    };
  },
};
