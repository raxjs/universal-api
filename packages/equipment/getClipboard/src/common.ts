import { promisify } from '../../../utils/promisify';
import { PARAMS, RESPONES } from './types';

const formatResponse = (res): RESPONES => {
  return {text: res.data || res.text}
}

function styleOptions(options): PARAMS {
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

/**
 * 同时抹平平台返回参数差异
 * @param api 
 */
export function initApi(api) {
  return (args: PARAMS) => {
    return promisify(api)(styleOptions(args)).then(formatResponse);
  };
}
