import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { CONTAINER_NAME } from '@utils/constant';
import { normalizeOpenLocation } from '../common';

const openLocation = normalizeOpenLocation((args) => (isDingdingMiniapp ? dd.openLocation(args) : my.openLocation(args)), CONTAINER_NAME.ALIPAY);

export default openLocation;
