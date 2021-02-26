import { promisify } from '../../utils/promisify';
import { OptionStruct, ResponseStruct, OpenOptionStruct } from './types';

/**
 * getLocation返回值格式化
 * @param res
 */
const formatResponse = (res): ResponseStruct => {
  const result: ResponseStruct = {
    latitude: res.latitude,
    longitude: res.longitude,
    accuracy: res.accuracy,
  };
  return result;
};

function styleOptions(options: OptionStruct = {}): OptionStruct {
  return {
    ...options,
    success: (res) => {
      options.success && options.success(formatResponse(res));
    },
    complete: (res) => {
      options.complete && options.complete(res);
    },
  };
}

export function normalizeGetLocation(api) {
  return (args: OptionStruct) => {
    return promisify(api)(styleOptions(args)).then(formatResponse);
  };
}

/**
 * openLocation
 * @param api
 */
export function normalizeOpenLocation(api) {
  return (args: OpenOptionStruct) => {
    return promisify(api)(args);
  };
}
