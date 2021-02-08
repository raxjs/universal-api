import { initApiShow, initApiHide } from '../common';

export const showLoading = initApiShow((args) => wx.showLoading(args));

export const hideLoading = initApiHide((args) => wx.hideLoading(args));

export default {
  showLoading,
  hideLoading
};
