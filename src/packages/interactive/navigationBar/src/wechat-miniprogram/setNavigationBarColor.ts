import { normalizeSetNavigationBarColor } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const setNavigationBarColor = normalizeSetNavigationBarColor((args) => {
  if (!args.frontColor) {
    args.frontColor = '#000000';
  }
  wx.setNavigationBarColor(args);
}, CONTAINER_NAME.WECHAT);

export default setNavigationBarColor;
