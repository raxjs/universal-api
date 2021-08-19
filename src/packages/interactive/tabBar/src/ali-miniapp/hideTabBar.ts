import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { normalizeHideTabBarOptions } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const hideTabBar = normalizeHideTabBarOptions((args?) => (isDingdingMiniapp ?
  dd.hideTabBar(args) : my.hideTabBar(args)), CONTAINER_NAME.ALIPAY);

export default hideTabBar;
