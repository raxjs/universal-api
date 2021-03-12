import { isDingdingMiniapp } from '../../../../utils/miniappEnvApp';
import { formatSystemInfo, formatSystemInfoAsync } from '../common';
import { AsyncOptions } from '../types';

export const getInfoSync = formatSystemInfo(() => (isDingdingMiniapp ? dd.getSystemInfoSync() : my.getSystemInfoSync()));

export const getInfo = formatSystemInfoAsync((options?: AsyncOptions) => {
  const { success, fail, complete } = options;
  const _getInfo = isDingdingMiniapp ? dd.getSystemInfo : my.getSystemInfo;
  _getInfo({
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
