import { promisify } from '@utils/promisify';
import { styleIn } from '@utils/styleOptions';
import { OptionStruct, ResponseStruct, OpenOptionStruct, ChooseLocationOptions } from './types';

/**
 * getLocation返回值格式化
 * @param res
 */
const formatResponse = (res): ResponseStruct => {
  const result: ResponseStruct = {
    ...res,
    latitude: String(res.latitude),
    longitude: String(res.longitude),
    accuracy: String(res.accuracy),
    horizontalAccuracy: String(res.horizontalAccuracy),
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

export function normalizeGetLocation(api, containerName) {
  return (args: OptionStruct) => {
    if (args?.resultType && typeof args.resultType === 'number' && !isNaN(args.resultType)) {
      args.type = `${args.resultType }`;
    }
    return promisify(api)(styleOptions(styleIn(args, containerName))).then(formatResponse);
  };
}

/**
 * openLocation
 * @param api
 */
export function normalizeOpenLocation(api, containerName) {
  return (args: OpenOptionStruct) => {
    return promisify(api)(styleIn(args, containerName));
  };
}

/**
 * chooseLocation
 */
export function normalizeChooseLocation(api, containerName) {
  return (args: ChooseLocationOptions) => {
    return promisify(api)(styleIn(args, containerName));
  };
}
