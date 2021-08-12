import { formatSystemInfo } from '../common';

const getInfoSync = formatSystemInfo(() => swan.getSystemInfoSync());

export default getInfoSync;
