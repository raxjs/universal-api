import {
  Options,
} from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

function hideShareMenu(options: Options) {
  const { menus, success, fail, complete } = options;
  return wx.hideShareMenu({
    menus,
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
export default normalize(hideShareMenu, CONTAINER_NAME.WECHAT);
