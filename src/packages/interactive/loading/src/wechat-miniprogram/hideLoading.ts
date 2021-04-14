import { normalizeHide } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

export const hideLoading = normalizeHide((args) => wx.hideLoading(args), CONTAINER_NAME.WECHAT);

export default hideLoading;
