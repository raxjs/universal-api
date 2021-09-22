import { CONTAINER_NAME } from '@utils/constant';
import { normalize } from '../common';

const vibrateShort = normalize(({ type, success, fail, complete }) => {
  wx.vibrateShort({
    type,
    success,
    fail,
    complete,
  });
}, CONTAINER_NAME.WECHAT);

export default vibrateShort;
