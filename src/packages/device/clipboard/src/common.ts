import { promisify } from '@utils/promisify';
import { CallBack, PARAMS } from './types';

/**
 * actionsheet返回值格式化
 * @param res
 */
const formatResponse = (res) => {
  return { text: res.data != undefined ? res.data : res.text };
};

/**
 * actionsheet参数格式化
 * @param options
 */
function styleOptions(options) {
  return options ? {
    ...options,
    success: (res) => {
      options.success && options.success(formatResponse(res));
    },
  } : {};
}

export function normalizeGet(api) {
  return (args: CallBack) => {
    return promisify(api)(styleOptions(args)).then(formatResponse);
  };
}

export function normalizeSet(api) {
  return (args: PARAMS) => {
    return promisify(api)(args);
  };
}
