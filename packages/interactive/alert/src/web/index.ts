import { Options } from '../types';
import confirm from '../../../confirm/src/web';
import { normalize } from '../common';

const alert = (args: Options) => {
  confirm({
    ...args,
    showCancel: false,
    confirmText: args.buttonText,
  });
};

export default normalize(alert);
