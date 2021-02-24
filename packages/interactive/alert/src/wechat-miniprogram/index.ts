import { Options } from '../types';
import { initApi } from '../common';

const alert = (args: Options): void => {
  wx.showModal({
    ...args,
    showCancel: false,
    confirmText: args.buttonText,
  });
};

export default initApi(alert);
