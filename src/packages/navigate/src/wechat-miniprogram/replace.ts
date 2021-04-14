import { IReplaceOptions } from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

export const replace = normalize.replace((options?: IReplaceOptions) => {
  const { url, success, fail, complete } = options || {};
  wx.redirectTo({
    url,
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
}, CONTAINER_NAME.WECHAT);


export default replace;
