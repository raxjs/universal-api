import { Options } from '../types';
import confirm from '../../../confirm/src/web';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const alert = (args: Options) => {
  confirm({
    ...args,
    showCancel: false,
    confirmText: args.buttonText,
  });
};

export default normalize(alert, CONTAINER_NAME.WEB);
