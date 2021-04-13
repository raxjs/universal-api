import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { CONTAINER_NAME } from '@utils/constant';
import { normalize } from '../common';

const previewImage = normalize.previewImage((args) => (isDingdingMiniapp ? dd.previewImage(args) : my.previewImage(args)), CONTAINER_NAME.ALIPAY);

export default previewImage;
