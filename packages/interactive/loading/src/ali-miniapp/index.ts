import { isDingdingMiniapp } from '../../../../utils/miniappEnvApp';
import { initApiShow, initApiHide } from '../common';

export const showLoading = initApiShow((args) => isDingdingMiniapp ? dd.showLoading(args) : my.showLoading(args));

export const hideLoading = initApiHide((args) => isDingdingMiniapp ? dd.hideLoading(args) : my.hideLoading(args));

export default {
  showLoading,
  hideLoading
};
