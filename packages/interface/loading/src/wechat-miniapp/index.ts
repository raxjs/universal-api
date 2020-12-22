import { initApiShow, initApiHide } from '../common';

export const showLoading = initApiShow(wx.showLoading);

export const hideLoading = initApiHide(wx.hideLoading);

export default {
  showLoading,
  hideLoading
};
