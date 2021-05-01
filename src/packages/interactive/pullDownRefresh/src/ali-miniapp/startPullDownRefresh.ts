import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { normalizeStart } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

export const startPullDownRefresh = normalizeStart((args) => (isDingdingMiniapp ? dd.startPullDownRefresh(args) : my.startPullDownRefresh(args)), CONTAINER_NAME.ALIPAY);

export default startPullDownRefresh;
