import { promisify } from '@utils/promisify';
import { styleIn } from '@utils/styleOptions';
import {
  ChooseVideoOptions,
  ChooseVideoRes,
  ChooseMediaOptions,
  ChooseMediaRes,
} from './types';

export const normalize = {
  chooseVideo: (api, containerName) => {
    const formatResponse = (res): ChooseVideoRes => {
      return {
        ...res,
        tempFilePath: res.tempFilePath || res.filePath,
      };
    };
    return (args: ChooseVideoOptions) => {
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
  chooseMedia: (api, containerName) => {
    const formatResponse = (res): ChooseMediaRes => {
      return {
        ...res,
        tempFiles: (res.tempFiles || res.files).map((item) => ({
          ...item,
          tempFilePath: item.tempFilePath || item.path,
        })),
      };
    };
    return (args: ChooseMediaOptions = {}) => {
      args = styleIn({
        count: 9,
        sizeType: ['original', 'compressed'],
        sourceType: ['camera', 'album'],
        mediaType: ['image', 'video'],
        maxDuration: 60,
        ...args,
      }, containerName);
      return promisify(api)({
        ...args,
        success: (res) => {
          args.success && args.success(formatResponse(res));
        },
        fail: (res) => {
          args.fail && args.fail(res);
        },
        complete: (res) => {
          args.complete && args.complete(res);
        },
      }).then(formatResponse);
    };
  },
};
