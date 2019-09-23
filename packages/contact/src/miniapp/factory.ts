import { IContactOptions } from '../types';

export const addPhoneContactFactory = (api: any, account: string) => {
  return (options: IContactOptions = {}) => {
    return new Promise((resolve, reject): void => {
      if (options.account) {
        options[account] = options.account;
        delete options.account;
      }
      options.success = res => {
        options.success && options.success(res);
        resolve(res);
      };
      options.fail = err => {
        options.fail && options.fail(err);
        reject(err);
      };
      api.addPhoneContact(options);
    });
  };
};
