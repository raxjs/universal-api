import { normalizeShow, normalizeHide } from '../common';

export const showLoading = normalizeShow((args) => wx.showLoading(args));

export const hideLoading = normalizeHide((args) => wx.hideLoading(args));

export default {
  showLoading,
  hideLoading
};
