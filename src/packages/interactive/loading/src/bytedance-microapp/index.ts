import { normalizeShow, normalizeHide } from '../common';

export const showLoading = normalizeShow((args) => tt.showLoading(args));

export const hideLoading = normalizeHide((args) => tt.hideLoading(args));

export default {
  showLoading,
  hideLoading
};
