import { formatSystemInfo } from '../common';

const getInfoSync = formatSystemInfo(() => wx.getSystemInfoSync());

export default getInfoSync;
