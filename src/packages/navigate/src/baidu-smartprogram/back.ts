import { IPopOptions } from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const back = normalize.back((options?: IPopOptions) => {
  const { success, fail, complete } = options || {};
  swan.navigateBack({
    delta: 1,
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
}, CONTAINER_NAME.BAIDU);

export default back;
