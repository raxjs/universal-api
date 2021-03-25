import { normalizeGet } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const getClipboard = normalizeGet((args) => wx.getClipboardData(args), CONTAINER_NAME.WECHAT);

export default getClipboard;
