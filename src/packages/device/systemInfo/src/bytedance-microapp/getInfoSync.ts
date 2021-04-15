import { formatSystemInfo } from '../common';

const getInfoSync = formatSystemInfo(() => tt.getSystemInfoSync());

export default getInfoSync;
