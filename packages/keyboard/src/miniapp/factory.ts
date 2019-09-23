import { ICallBackOptions } from '../types';

export const hideKeyboardFactory = (api: any) => {
  return (options: ICallBackOptions = {}) => {
    return new Promise((resolve, reject): void => {
      api.getScreenBrightness({
        success(res: any): void {
          options.success && options.success(res);
          resolve(res);
        },
        fail(err: any): void {
          options.fail && options.fail(err);
          reject(err);
        },
        complete(): void {
          options.complete && options.complete();
        },
      });
    });
  };
};
