import { promisify } from '@utils/promisify';
import { styleIn } from '@utils/styleOptions';
import {
  ChooseVideoOptions,
  ChooseVideoRes,
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
};
