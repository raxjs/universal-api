import { isDingdingMiniapp } from '../../../../utils/miniappEnvApp';
import { normalizeShow, normalizeHide } from '../common';

export const showLoading = normalizeShow((args) => isDingdingMiniapp ? dd.showLoading(args) : my.showLoading(args));

export const hideLoading = normalizeHide((args) => isDingdingMiniapp ? dd.hideLoading(args) : my.hideLoading(args));

export default {
  showLoading,
  hideLoading
};
