import { promisify } from '../../utils/promisify';
import { GetOrRemoveOptionStruct, SetOptionStruct } from './types';

/**
 * @param params
 */
function formatGetStorageRes(params: GetOrRemoveOptionStruct) {
  if (params && typeof params.fail === 'function') {
    const failFn = params.fail;
    params.fail = (err) => {
      if (err.errMsg === 'getStorage:fail data not found') {
        typeof params.success === 'function' && params.success({ data: null });
        typeof params.complete === 'function' && params.complete({ data: null });
        return;
      }
      failFn(err);
    };
  }
  return params;
}

export const normalize = {
  getStorage: (api) => {
    return (args: GetOrRemoveOptionStruct) => {
      return promisify(api)(formatGetStorageRes(args)).catch((e) => {
        if (e.errMsg === 'getStorage:fail data not found') {
          return { data: null };
        }
      });
    };
  },
  setStorage: (api) => {
    return (args: SetOptionStruct) => {
      return promisify(api)(args);
    };
  },
  removeStorage: (api) => {
    return (args: GetOrRemoveOptionStruct) => {
      return promisify(api)(args);
    };
  },
};
