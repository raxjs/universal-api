import {
  Options,
} from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

function showShareMenu(options: Options) {
  const { withShareTicket = false, menus, success, fail, complete } = options;
  return wx.showShareMenu({
    withShareTicket,
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
export default normalize(showShareMenu, CONTAINER_NAME.WECHAT);
