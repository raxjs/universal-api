import { Options } from '../types';
import confirm from '../../../confirm/src/web';
import { initApi } from '../common';

const alert = (args: Options) => {
  confirm({
    ...args,
    showCancel: false,
    confirmText: args.buttonText,
  });
};

export default initApi(alert);
