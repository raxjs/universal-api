import {
  Options,
} from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

function showShareMenu(options: Options) {
  const { success, fail, complete } = options;
  return ks.showShareMenu({
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
export default normalize(showShareMenu, CONTAINER_NAME.KWAI);
