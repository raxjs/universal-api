import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

export default normalize((args) => tt.showModal({
  ...args,
  confirmText: args.confirmButtonText,
  cancelText: args.cancelButtonText,
}), CONTAINER_NAME.BYTE);
