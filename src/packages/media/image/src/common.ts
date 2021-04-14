import { promisify } from '@utils/promisify';
import { styleIn } from '@utils/styleOptions';
import {
  ChooseImageOptions,
  ChooseImageRes,
  CompressImageOptions,
  CompressImageRes,
  GetImageInfoOptions,
  PreviewImageOptions,
  SaveImageOptions,
} from './types';

export const normalize = {
  chooseImage: (api, containerName) => {
    const formatResponse = (res): ChooseImageRes => {
      return {
        ...res,
        tempFiles: res.tempFiles || res.files,
        tempFilePaths: res.tempFilePaths,
      };
    };
    return (args: ChooseImageOptions) => {
      args = styleIn(args, containerName);
      return promisify(api)({
        ...args,
        count: args.count || 1,
        success: (res) => {
          args.success && args.success(formatResponse(res));
        },
        complete: (res) => {
          args.complete && args.complete(res);
        },
      }).then(formatResponse);
    };
  },
  compressImage: (api, containerName) => {
    const formatResponse = (res): CompressImageRes => {
      return {
        tempFilePath: res.tempFilePath || (res.filePaths || [])[0] || (res.apFilePaths || [])[0] || '',
      };
    };
    return (args: CompressImageOptions) => {
      args = styleIn(args, containerName);
      return promisify(api)({
        ...args,
        success: (res) => {
          args.success && args.success(formatResponse(res));
        },
        complete: (res) => {
          args.complete && args.complete(res);
        },
      }).then(formatResponse);
    };
  },
  getImageInfo: (api, containerName) => {
    return (args: GetImageInfoOptions) => {
      return promisify(api)(styleIn(args, containerName));
    };
  },
  previewImage: (api, containerName) => {
    return (args: PreviewImageOptions) => {
      return promisify(api)(styleIn(args, containerName));
    };
  },
  saveImage: (api, containerName) => {
    return (args: SaveImageOptions) => {
      return promisify(api)(styleIn(args, containerName));
    };
  },
};
