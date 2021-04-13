import { IReLaunchOptions } from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

export const reLaunch = normalize.reLaunch((options: IReLaunchOptions) => {
  const { url, success, fail, complete } = options;
  tt.reLaunch({
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
}, CONTAINER_NAME.BYTE);

export default reLaunch;
