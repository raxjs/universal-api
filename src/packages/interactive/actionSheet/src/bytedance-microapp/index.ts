import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

export default normalize((args) => {
  tt.showActionSheet({
    ...args,
    fail: (err) => {
      if (err && err.errMsg === 'showActionSheet:fail cancel') {
        args.success({ tapIndex: -1 });
      } else {
        args.fail(err);
      }
    },
  });
}, CONTAINER_NAME.BYTE);
