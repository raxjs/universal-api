import { isDingdingMiniapp, isMiniApp } from 'universal-env';
import { promisify } from '../../../utils/promisify';
import { ShowActionSheetOptions, ShowActionSheetRes } from './types';

/**
 * actionsheet返回值格式化
 * @param res 
 */
const formatResponse = (res): ShowActionSheetRes => {
  return {tapIndex: res.tapIndex || res.index};
}

/**
 * actionsheet参数格式化
 * @param options 
 */
function styleOptions(options: ShowActionSheetOptions) {
  if (isDingdingMiniapp || isMiniApp) {
    options.items = options.itemList;
    delete options.itemList;
  }
  return {
    ...options,
    success: res => {
      options.success && options.success(formatResponse(res));
    },
    complete: res => {
      options.complete && options.complete(formatResponse(res));
    },
    fail: err => {
      options.fail && options.fail(err);
    }
  }
}

export function initApi(api) {
  return (args: ShowActionSheetOptions) => {
    return promisify(api)(styleOptions(args)).then(formatResponse);
  };
}
