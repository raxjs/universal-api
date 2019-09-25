import { IContactOptions } from '../types';

export const addPhoneContactFactory = (api: any, account: string) => {
  return (options: IContactOptions = {}) => {
    return new Promise((resolve, reject): void => {
      if (options.account) {
        options[account] = options.account;
        delete options.account;
      }
      const callbacks = {};
      ['success', 'fail', 'complete'].forEach(method => {
        callbacks[method] = options[method];
      });
      Object.assign(options, {
        success(res: any) {
          callbacks['success'] && callbacks['success'](res);
          resolve(res)
        },
        fail(res: any) {
          callbacks['fail'] && callbacks['fail'](res);
          reject(res)
        },
        complete(res: any) {
          callbacks['complete'] && callbacks['complete'](res);
        },
      });
      api.addPhoneContact(options);
    });
  };
};
