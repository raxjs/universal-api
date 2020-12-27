import { promisify } from '../../../utils/promisify';
import { OPTION_STRUCT, RESPONSE_STRUCT } from './types';

const formatResponse = (res): RESPONSE_STRUCT => {
  const result: RESPONSE_STRUCT = {
    tempFilePath: res.tempFilePath || (res.filePaths || [])[0] || (res.apFilePaths || [])[0] || ''
  };
  return result;
}

function styleOptions(options: OPTION_STRUCT = {src: ''}) {
  const args: any = {
    ...options,
    success: res => {
      options.success && options.success(formatResponse(res));
    },
    complete: res => {
      options.complete && options.complete(res);
    }
  };
  return args;
}

export function initApi(api) {
  return (args: OPTION_STRUCT) => {
    return promisify(api)(styleOptions(args)).then(formatResponse);
  };
}