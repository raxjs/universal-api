import { isDingdingMiniapp } from 'universal-env';
import { initApiShow, initApiHide } from '../common';

export const showLoading = initApiShow(isDingdingMiniapp ? dd.showLoading : my.showLoading);

export const hideLoading = initApiHide(isDingdingMiniapp ? dd.hideLoading : my.hideLoading);

export default {
  showLoading,
  hideLoading
};
