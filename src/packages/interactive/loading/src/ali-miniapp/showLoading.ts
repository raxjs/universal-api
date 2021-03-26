import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { normalizeShow } from '../common';

export const showLoading = normalizeShow((args) => (isDingdingMiniapp ? dd.showLoading(args) : my.showLoading(args)));

export default showLoading;
