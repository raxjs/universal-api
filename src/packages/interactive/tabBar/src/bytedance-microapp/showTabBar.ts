import { normalizeShowTabBarOptions } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const showTabBar = normalizeShowTabBarOptions((args) => tt.showTabBar(args), CONTAINER_NAME.BYTE);

export default showTabBar;
