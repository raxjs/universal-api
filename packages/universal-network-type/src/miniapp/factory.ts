import { Options, NetworkResult } from '../types';

export const getNetworkTypeFactory = (module: any) => {
  return (options: Options = {}) => {
    return new Promise((resolve, reject): void => {
      module.getNetworkType({
        success: (res: NetworkResult) => {
          options['success'] && options['success'](res);
          resolve(res);
        },
        fail: (err: any): void => {
          options['fail'] && options['fail'](err);
          reject(err);
        },
        complete: (res: any): void => {
          options['complete'] && options['complete'](res);
        }
      });
    });
  };
};
