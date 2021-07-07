import { normalizeSetNavigationBarColor } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const setNavigationBarColor = normalizeSetNavigationBarColor((args) => {
  wx.setNavigationBarColor(args);
}, CONTAINER_NAME.WECHAT);

export default setNavigationBarColor;
