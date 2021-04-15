import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { CONTAINER_NAME } from '@utils/constant';
import { normalizeGetLocation } from '../common';

const getLocation = normalizeGetLocation((args) => (isDingdingMiniapp ? dd.getLocation(args) : my.getLocation(args)), CONTAINER_NAME.ALIPAY);

export default getLocation;
