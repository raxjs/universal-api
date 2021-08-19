import { normalizeHideTabBarOptions } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const hideTabBar = normalizeHideTabBarOptions((args?) => tt.hideTabBar(args), CONTAINER_NAME.BYTE);

export default hideTabBar;
