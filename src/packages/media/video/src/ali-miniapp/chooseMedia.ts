import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { CONTAINER_NAME } from '@utils/constant';
import { normalize } from '../common';

const chooseMedia = normalize.chooseMedia((args) => (isDingdingMiniapp ? dd.chooseImage(args) : my.chooseImage(args)), CONTAINER_NAME.ALIPAY);

export default chooseMedia;
