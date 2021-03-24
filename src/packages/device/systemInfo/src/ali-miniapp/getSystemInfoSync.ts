import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { formatSystemInfo } from '../common';

const getInfoSync = formatSystemInfo(() => (isDingdingMiniapp ? dd.getSystemInfoSync() : my.getSystemInfoSync()));
export default getInfoSync;
