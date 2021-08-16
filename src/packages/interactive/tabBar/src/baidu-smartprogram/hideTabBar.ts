import { normalizeHideTabBarOptions } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const hideTabBar = normalizeHideTabBarOptions((args) => swan.hideTabBar(args), CONTAINER_NAME.BAIDU);

export default hideTabBar;
