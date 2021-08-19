import {
  Options,
} from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

function hideShareMenu(options: Options) {
  const { success, fail, complete } = options;
  return tt.hideShareMenu({
    success(res) {
      success && success(res);
    },
    fail(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res);
    },
  });
}
export default normalize(hideShareMenu, CONTAINER_NAME.BYTE);
