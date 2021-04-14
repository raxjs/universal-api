import { formatSystemInfoAsync } from '../common';
import { AsyncOptions } from '../types';
import { CONTAINER_NAME } from '@utils/constant';

const getInfo = formatSystemInfoAsync((options?: AsyncOptions) => {
  const { success, fail, complete } = options;
  tt.getSystemInfo({
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
}, CONTAINER_NAME.BYTE);

export default getInfo;
