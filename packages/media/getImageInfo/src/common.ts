import { promisify } from '../../../utils/promisify';
import { OPTION_STRUCT, RESPONSE_STRUCT } from './types';

const formatResponse = (res): RESPONSE_STRUCT => {
  const result: RESPONSE_STRUCT = {
    width: res.width,
    height: res.height,
    path: res.path
  }
  return result;
}

function styleOptions(options: OPTION_STRUCT = {src: ''}): OPTION_STRUCT {
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

export function initApi(api) {
  return (args: OPTION_STRUCT) => {
    return promisify(api)(styleOptions(args)).then(formatResponse);
  };
}