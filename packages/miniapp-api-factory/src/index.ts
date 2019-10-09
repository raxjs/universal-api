export interface ICallback {
  (res: any): void;
};

export interface IOptions {
  success?: ICallback;
  fail?: ICallback;
  complete?: ICallback;
};

export interface IEventCallback {
  (res: any): void;
};

export interface IProcess {
  method: string;
  optionsInterceptor?: (options: IOptions) => any;
  successInterceptor?: (res: any) => any;
  failInterceptor?: (err: any) => any;
};

export const apiEventHandlerVisitor = (platformApi: any, process: IProcess) => {
  return (callback: IEventCallback) => {
    platformApi[process.method](callback);
  };
};

export const apiVisitor = (platformApi: any, process: IProcess) => {
  return (options: IOptions = {}) => {
    if (process.optionsInterceptor) {
      options = process.optionsInterceptor(options);
    }
    return new Promise((resolve, reject): void => {
      const callbacks = {};
      ['success', 'fail', 'complete'].forEach(k => {
        callbacks[k] = options[k];
      });
      Object.assign(options, {
        success: (res: any) => {
          if (process.successInterceptor) {
            res = process.successInterceptor(res);
          }
          callbacks['success'] && callbacks['success'](res);
          resolve(res);
        },
        fail: (err: any): void => {
          if (process.failInterceptor) {
            err = process.failInterceptor(err);
          }
          callbacks['fail'] && callbacks['fail'](err);
          reject(err);
        },
        complete: (res: any): void => {
          callbacks['complete'] && callbacks['complete'](res);
        }
      });
      platformApi[process.method](options);
    });
  };
};
