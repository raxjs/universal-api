import { formatSystemInfo } from '../common';

export const getInfoSync = formatSystemInfo(() => tt.getSystemInfoSync());

export default getInfoSync;
