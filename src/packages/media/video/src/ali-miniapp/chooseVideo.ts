import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { CONTAINER_NAME } from '@utils/constant';
import { normalize } from '../common';

const chooseVideo = normalize.chooseVideo((args) => (isDingdingMiniapp ? dd.chooseVideo(args) : my.chooseVideo(args)), CONTAINER_NAME.ALIPAY);

export default chooseVideo;
