import { Options } from '../types';
import { normalize } from '../common';

const alert = (args: Options): void => {
  tt.showModal({
    ...args,
    showCancel: false,
    confirmText: args.buttonText,
  });
};

export default normalize(alert);
