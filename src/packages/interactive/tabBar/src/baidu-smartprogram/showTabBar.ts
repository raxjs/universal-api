import { normalizeShowTabBarOptions } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const showTabBar = normalizeShowTabBarOptions((args?) => swan.showTabBar(args), CONTAINER_NAME.BAIDU);

export default showTabBar;
