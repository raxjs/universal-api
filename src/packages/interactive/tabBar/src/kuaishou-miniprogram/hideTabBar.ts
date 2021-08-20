import { normalizeHideTabBarOptions } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const hideTabBar = normalizeHideTabBarOptions((args) => ks.hideTabBar(args), CONTAINER_NAME.KWAI);

export default hideTabBar;
