import { promisify } from '../../../utils/promisify';
import {
  ChooseImageOptions,
  ChooseImageRes,
  CompressImageOptions,
  CompressImageRes,
  GetImageInfoOptions,
  GetImageInfoRes,
  PreviewImageOptions,
  SaveImageOptions,
} from './types';

export const initApi = {
  chooseImage: (api) => {
    const formatResponse = (res): ChooseImageRes => {
      return {
        ...res,
        tempFiles: res.tempFiles || res.files,
        tempFilePaths: res.tempFilePaths
      };
    };
    return (args: ChooseImageOptions) => {
      return promisify(api)({
        ...args,
        count: args.count || 1,
        success: res => {
          args.success && args.success(formatResponse(res));
        },
        complete: res => {
          args.complete && args.complete(res);
        }
      }).then(formatResponse);
    };
  },
  compressImage: (api) => {
    const formatResponse = (res): CompressImageRes => {
      return {
        tempFilePath: res.tempFilePath || (res.filePaths || [])[0] || (res.apFilePaths || [])[0] || ''
      };
    };
    return (args: CompressImageOptions) => {
      return promisify(api)({
        ...args,
        success: res => {
          args.success && args.success(formatResponse(res));
        },
        complete: res => {
          args.complete && args.complete(res);
        }
      }).then(formatResponse);
    };
  },
  getImageInfo: (api) => {
    return (args: GetImageInfoOptions) => {
      return promisify(api)(args);
    };
  },
  previewImage: (api) => {
    return (args: PreviewImageOptions) => {
      return promisify(api)(args);
    };
  },
  saveImage: (api) => {
    return (args: SaveImageOptions) => {
      return promisify(api)(args);
    };
  }
};
