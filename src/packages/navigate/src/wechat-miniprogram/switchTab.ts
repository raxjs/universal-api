import { ISwitchTabOptions } from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

export const switchTab = normalize.switchTab(
  (options: ISwitchTabOptions) => {
    wx.switchTab(options);
  },
  CONTAINER_NAME.WECHAT,
);

export default switchTab;
