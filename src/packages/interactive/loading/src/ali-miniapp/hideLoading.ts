import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { normalizeHide } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

export const hideLoading = normalizeHide((args) => (isDingdingMiniapp ? dd.hideLoading(args) : my.hideLoading(args)), CONTAINER_NAME.ALIPAY);

export default hideLoading;
