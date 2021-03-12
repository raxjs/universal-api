import { formatSystemInfo, formatSystemInfoAsync } from '../common';
import { AsyncOptions } from '../types';

export const getInfoSync = formatSystemInfo(() => wx.getSystemInfoSync());

export const getInfo = formatSystemInfoAsync((options?: AsyncOptions) => {
  const { success, fail, complete } = options;
  wx.getSystemInfo({
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
});
export default {
  getInfo,
  getInfoSync,
};
