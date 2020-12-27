import { initApiShow, initApiHide } from '../common';

export const showLoading = initApiShow((args) => tt.showLoading(args));

export const hideLoading = initApiHide((args) => tt.hideLoading(args));

export default {
  showLoading,
  hideLoading
};
