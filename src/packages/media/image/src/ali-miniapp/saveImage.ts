import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { CONTAINER_NAME } from '@utils/constant';
import { normalize } from '../common';

const saveImage = normalize.saveImage((args) => (isDingdingMiniapp ? dd.saveImage(args) : my.saveImage(args)), CONTAINER_NAME.ALIPAY);

export default saveImage;
