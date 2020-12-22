import { promisify } from '../../utils/promisify';
import { OPTION_STRUCT, RESPONSE_STRUCT, OPEN_OPTION_STRUCT } from './types';

/**
 * getLocation返回值格式化
 * @param res 
 */
const formatResponse = (res): RESPONSE_STRUCT => {
  const result: RESPONSE_STRUCT = {
    latitude: res.latitude,
    longitude: res.longitude,
    accuracy: res.accuracy
  }
  return result;
}

function styleOptions(options: OPTION_STRUCT): OPTION_STRUCT {
  return {
    ...options,
    success: res => {
      options.success && options.success(formatResponse(res));
    },
    complete: res => {
      options.complete && options.complete(formatResponse(res));
    }
  }
}

export function initApiGetLocation(api) {
  return (args: OPTION_STRUCT) => {
    return promisify(api)(styleOptions(args)).then(formatResponse);
  };
}

/**
 * openLocation
 * @param api 
 */
export function initApiOpenLocation(api) {
  return (args: OPEN_OPTION_STRUCT) => {
    return promisify(api)(args);
  }
}
