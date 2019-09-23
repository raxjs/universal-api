import {
  ICallBackOptions,
} from '../types';

export const vibrateShortFactory = (api: any) => {
  return (options: ICallBackOptions = {}) => {
    return new Promise((resolve, reject): void => {
      api.vibrateShort({
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

export const vibrateLongFactory = (api: any) => {
  return (options: ICallBackOptions = {}) => {
    return new Promise((resolve, reject): void => {
      api.vibrateLong({
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
