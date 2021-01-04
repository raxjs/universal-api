import { promisify } from '../../utils/promisify';
import { optionStruct, responseStruct, openOptionStruct } from './types';

/**
 * getLocation返回值格式化
 * @param res 
 */
const formatResponse = (res): responseStruct => {
  const result: responseStruct = {
    latitude: res.latitude,
    longitude: res.longitude,
    accuracy: res.accuracy
  }
  return result;
}

function styleOptions(options: optionStruct = {}): optionStruct {
  return {
    ...options,
    success: res => {
      options.success && options.success(formatResponse(res));
    },
    complete: res => {
      options.complete && options.complete(res);
    }
  }
}

export function initApiGetLocation(api) {
  return (args: optionStruct) => {
    return promisify(api)(styleOptions(args)).then(formatResponse);
  };
}

/**
 * openLocation
 * @param api 
 */
export function initApiOpenLocation(api) {
  return (args: openOptionStruct) => {
    return promisify(api)(args);
  }
}
