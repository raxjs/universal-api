import { promisify } from '../../../utils/promisify';
import { PARAMS, RESPONES } from './types';

/**
 * 同时抹平平台返回参数差异
 * @param api 
 */
export function initApi(api) {
  return (args: PARAMS) => {
    return promisify(api)(args).then((res):RESPONES => {
      return {text: res.data || res.text}
    });
  };
}
