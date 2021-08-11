import { Options } from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const alert = (args: Options): void => {
  ks.showModal({
    ...args,
    showCancel: false,
    confirmText: args.buttonText,
  });
};

export default normalize(alert, CONTAINER_NAME.KWAI);
