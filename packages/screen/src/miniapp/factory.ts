import {
  ICallBackOptions,
  IEventCallback,
  IKeepOnOptions,
  ISetOptions,
} from '../types';

export const getScreenBrightnessFactory = (api: any) => {
  return (options: ICallBackOptions = {}) => {
    return new Promise((resolve, reject): void => {
      api.getScreenBrightness({
        success(res: number): void {
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

export const setScreenBrightnessFactory = (api: any, brightness: string) => {
  return (options: ISetOptions) => {
    return new Promise((resolve, reject): void => {
      api.setScreenBrightness({
        [brightness]: options.value,
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

export const setKeepScreenOnFactory = (api: any) => {
  return (options: IKeepOnOptions) => {
    return new Promise((resolve, reject): void => {
      api.setScreenBrightness({
        keepScreenOn: options.keepScreenOn,
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

export const onUserCaptureScreenFactory = (api: any) => {
  return (callback: IEventCallback) => {
    return new Promise((resolve): void => {
      api.onUserCaptureScreen(() => {
        callback && callback();
        resolve();
      });
    });
  };
};

export const offUserCaptureScreenFactory = (api: any) => {
  return (callback: IEventCallback) => {
    return new Promise((resolve): void => {
      api.offUserCaptureScreen(() => {
        callback && callback();
        resolve();
      });
    });
  };
};
