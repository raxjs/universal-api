import { promisify } from '../../../utils/promisify';
import { OPTION_STRUCT, RESPONSE_STRUCT } from './types';

const formatResponse = (res): RESPONSE_STRUCT => {
  const result: RESPONSE_STRUCT = {
    // 阿里小程序文档上没这个返回值，但实际上是有的
    tempFilePaths: res.tempFilePaths
  }
  return result;
}

function styleOptions(options: OPTION_STRUCT): OPTION_STRUCT {
  return {
    ...options,
    // 默认一张
    count: options.count || 1,
    success: res => {
      options.success && options.success(formatResponse(res));
    },
    complete: res => {
      options.complete && options.complete(formatResponse(res));
    }
  }
}

export function initApi(api) {
  return (args: OPTION_STRUCT) => {
    return promisify(api)(styleOptions(args)).then(formatResponse);
  };
}
