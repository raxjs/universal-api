import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { normalizeShowTabBarOptions } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const showTabBar = normalizeShowTabBarOptions((args?) => (isDingdingMiniapp ?
  dd.showTabBar(args) : my.showTabBar(args)), CONTAINER_NAME.ALIPAY);

export default showTabBar;
