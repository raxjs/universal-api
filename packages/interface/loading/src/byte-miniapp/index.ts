import { initApiShow, initApiHide } from '../common';

export const showLoading = initApiShow(tt.showLoading);

export const hideLoading = initApiHide(tt.hideLoading);

export default {
  showLoading,
  hideLoading
};
