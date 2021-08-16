import { normalizeHideTabBarOptions } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const hideTabBar = normalizeHideTabBarOptions((args) => wx.hideTabBar(args), CONTAINER_NAME.WECHAT);

export default hideTabBar;
