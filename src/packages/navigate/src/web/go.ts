import { IGoOptions } from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const go = normalize.go((options: IGoOptions) => {
  const { step, success, fail, complete } = options;

  if (step < 0) {
    setTimeout((): void => {
      history.go(options.step);
      success && success();
      complete && complete();
    });
  } else {
    fail && fail({ errMsg: 'step不能大于或等于0' });
    complete && complete({ errMsg: 'step不能大于或等于0' });
  }
}, CONTAINER_NAME.WEB);

export default go;
