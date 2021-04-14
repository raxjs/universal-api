import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { CONTAINER_NAME } from '@utils/constant';
import { normalize } from '../common';

const getImageInfo = normalize.getImageInfo((args) => (isDingdingMiniapp ? dd.getImageInfo(args) : my.getImageInfo(args)), CONTAINER_NAME.ALIPAY);

export default getImageInfo;
