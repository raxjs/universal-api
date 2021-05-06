import { normalizeStart } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const startPullDownRefresh = normalizeStart((args) => wx.startPullDownRefresh(args), CONTAINER_NAME.WECHAT);

export default startPullDownRefresh;
