import { CONTAINER_NAME } from '@utils/constant';
import { normalize } from '../common';

const vibrateShort = normalize(({ success, fail, complete }) => {
  if (!window?.navigator?.vibrate) {
    fail && fail('@uni：vibrateShort 当前环境暂不支持');
    complete && complete('@uni：vibrateShort 当前环境暂不支持');
    return;
  }
  const res = window.navigator.vibrate(15);
  if (res) {
    success && success();
    complete && complete();
  } else {
    fail && fail();
    complete && complete();
  }
}, CONTAINER_NAME.WEB);

export default vibrateShort;
