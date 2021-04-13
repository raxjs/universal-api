import { IPopOptions } from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const back = normalize.back((options?: IPopOptions) => {
  const { success, fail, complete } = options || {};
  setTimeout((): void => {
    try {
      history.go(-1);
      success && success();
      complete && complete();
    } catch (e) {
      fail && fail(e);
      complete && complete(e);
    }
  });
}, CONTAINER_NAME.WEB);

export default back;
