/* eslint-disable eqeqeq */
import { promisify } from '@utils/promisify';
import { styleIn } from '@utils/styleOptions';
import { ShowActionSheetOptions, ShowActionSheetRes } from './types';

/**
 * @param res
 */
const formatResponse = (res): ShowActionSheetRes => {
  return {
    ...res,
    tapIndex: res.tapIndex != undefined ? res.tapIndex : res.index,
  };
};

export function normalize(api, containerName) {
  return (args: ShowActionSheetOptions) => {
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
}
