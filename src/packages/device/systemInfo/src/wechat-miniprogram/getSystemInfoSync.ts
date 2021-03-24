import { formatSystemInfo } from '../common';

export const getInfoSync = formatSystemInfo(() => wx.getSystemInfoSync());

export default getInfoSync;
