import { normalizeStop } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

export const stopPullDownRefresh = normalizeStop((args) => wx.stopPullDownRefresh(args), CONTAINER_NAME.WECHAT);

export default stopPullDownRefresh;
