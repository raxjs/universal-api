import { normalizeShow } from '../common';

export const showLoading = normalizeShow((args) => wx.showLoading(args));

export default showLoading;
