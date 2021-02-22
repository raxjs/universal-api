import { promisify } from '../../utils/promisify';
import { GetOrRemoveOptionStruct, SetOptionStruct } from './types';

/**
 * 抹平data not found差异，各端均返回空值，不抛异常
 * @param params
 */
function formatRes(params: GetOrRemoveOptionStruct) {
  if (params && typeof params.fail === 'function') {
    const failFn = params.fail;
    params.fail = err => {
      if (err.errMsg === 'getStorage:fail data not found') {
        typeof params.success === 'function' && params.success({data: null});
        typeof params.complete === 'function' && params.complete({data: null});
        return;
      }
      failFn(err);
    };
  }
  return params;
}

export function initApiGetStorage(api) {
  return (args: GetOrRemoveOptionStruct) => {
    return promisify(api)(formatRes(args)).catch(e => {
      if (e.errMsg === 'getStorage:fail data not found') {
        return {data: null};
      }
    });
  };
}

export function initApiGetOrRemove(api) {
  return (args: GetOrRemoveOptionStruct) => {
    return promisify(api)(args);
  };
}

export function initApiSet(api) {
  return (args: SetOptionStruct) => {
    return promisify(api)(args);
  };
}
