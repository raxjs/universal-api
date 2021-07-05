import { IGoOptions } from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const go = normalize.go((options: IGoOptions) => {
  const { step, success, fail, complete } = options;
  if (step < 0) {
    ks.navigateBack({
      delta: Math.abs(step),
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
  } else {
    fail && fail({ errMsg: 'step不能大于或等于0' });
    complete && complete({ errMsg: 'step不能大于或等于0' });
  }
}, CONTAINER_NAME.KWAI);

export default go;
