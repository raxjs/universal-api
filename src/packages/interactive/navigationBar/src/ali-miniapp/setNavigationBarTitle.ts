import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { normalizeSetNavigationBarTitle } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const setNavigationBarTitle = normalizeSetNavigationBarTitle((args) => (isDingdingMiniapp ?
  dd.setNavigationBar(args) : my.setNavigationBar(args)), CONTAINER_NAME.ALIPAY);

export default setNavigationBarTitle;
