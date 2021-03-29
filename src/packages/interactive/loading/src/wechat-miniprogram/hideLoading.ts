import { normalizeHide } from '../common';

export const hideLoading = normalizeHide((args) => wx.hideLoading(args));

export default hideLoading;
