import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { CONTAINER_NAME } from '@utils/constant';
import { normalize } from '../common';

const chooseImage = normalize.chooseImage((args) => (isDingdingMiniapp ? dd.chooseImage(args) : my.chooseImage(args)), CONTAINER_NAME.ALIPAY);

export default chooseImage;
