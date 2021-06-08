import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { CONTAINER_NAME } from '@utils/constant';
import { normalizeChooseLocation } from '../common';

const chooseLocation = normalizeChooseLocation((args) =>
  (isDingdingMiniapp ? dd.chooseLocation(args) : my.chooseLocation(args)), CONTAINER_NAME.ALIPAY);

export default chooseLocation;
