import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { normalizeShow } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

export const showLoading = normalizeShow((args) => (isDingdingMiniapp ? dd.showLoading(args) : my.showLoading(args)), CONTAINER_NAME.ALIPAY);

export default showLoading;
