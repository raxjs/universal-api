import { CONTAINER_NAME } from '@utils/constant';
import { normalize } from '../common';

const vibrateLong = normalize(({ type, success, fail, complete }) => {
  wx.vibrateLong({
    type,
    success,
    fail,
    complete,
  });
}, CONTAINER_NAME.WECHAT);

export default vibrateLong;
