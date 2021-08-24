import { normalizeShowTabBarOptions } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const showTabBar = normalizeShowTabBarOptions((args) => wx.showTabBar(args), CONTAINER_NAME.WECHAT);

export default showTabBar;
