import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { normalizeStop } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

export const stopPullDownRefresh = normalizeStop((args) => (isDingdingMiniapp ? dd.stopPullDownRefresh(args) : my.stopPullDownRefresh(args)), CONTAINER_NAME.ALIPAY);

export default stopPullDownRefresh;
