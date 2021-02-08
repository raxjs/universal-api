import { formatSystemInfo } from '../common';

export default formatSystemInfo(() => wx.getSystemInfoSync());
