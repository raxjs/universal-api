import { normalizeShowTabBarOptions } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const showTabBar = normalizeShowTabBarOptions((args) => ks.showTabBar(args), CONTAINER_NAME.KWAI);

export default showTabBar;
