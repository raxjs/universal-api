import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { normalizeSetNavigationBarColor } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const setNavigationBarColor = normalizeSetNavigationBarColor((args) => (isDingdingMiniapp ?
  dd.setNavigationBar(args) : my.setNavigationBar(args)), CONTAINER_NAME.ALIPAY);

export default setNavigationBarColor;
