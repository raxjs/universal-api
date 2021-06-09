import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { normalizeStart } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const startPullDownRefresh = normalizeStart((args) => (isDingdingMiniapp ?
  console.warn('@uni/apis：dd.startPullDownRefresh暂不支持')
  : my.startPullDownRefresh(args)), CONTAINER_NAME.ALIPAY);

export default startPullDownRefresh;
