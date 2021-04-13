import { normalizeShow } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

export const showLoading = normalizeShow((args) => wx.showLoading(args), CONTAINER_NAME.WECHAT);

export default showLoading;
