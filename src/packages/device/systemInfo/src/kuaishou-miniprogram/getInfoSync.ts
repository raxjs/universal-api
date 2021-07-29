import { formatSystemInfo } from '../common';

const getInfoSync = formatSystemInfo(() => ks.getSystemInfoSync());

export default getInfoSync;
