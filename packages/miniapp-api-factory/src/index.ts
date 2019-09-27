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
  processOptions?: (options: IOptions) => any;
  processSuccess?: (res: any) => any;
  processFail?: (err: any) => any;
};

export const miniAppEventHandlerFactory = (platformApi: any, process: IProcess) => {
  return (callback: IEventCallback) => {
    platformApi[process.method](callback);
  };
};

export const miniAppFactory = (platformApi: any, process: IProcess) => {
  return (options: IOptions = {}) => {
    if (process.processOptions) {
      options = process.processOptions(options);
    }
    return new Promise((resolve, reject): void => {
      const callbacks = {};
      ['success', 'fail', 'complete'].forEach(k => {
        callbacks[k] = options[k];
      });
      Object.assign(options, {
        success: (res: any) => {
          if (process.processSuccess) {
            res = process.processSuccess(res);
          }
          callbacks['success'] && callbacks['success'](res);
          resolve(res);
        },
        fail: (err: any): void => {
          if (process.processFail) {
            err = process.processFail(err);
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
