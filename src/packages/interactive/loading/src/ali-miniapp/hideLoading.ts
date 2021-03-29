import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { normalizeHide } from '../common';

export const hideLoading = normalizeHide((args) => (isDingdingMiniapp ? dd.hideLoading(args) : my.hideLoading(args)));

export default hideLoading;
