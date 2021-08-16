import {
  Options,
} from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

function subscribeMessage(options: Options) {
  const { tmplIds, success, fail, complete } = options;
  return wx.requestSubscribeMessage({
    tmplIds,
    success() {
      success && success();
    },
    fail(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res);
    },
  });
}
export default normalize(subscribeMessage, CONTAINER_NAME.WECHAT);
