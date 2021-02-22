import { isDingdingMiniapp } from '../../../../utils/miniappEnvApp';
import { formatSystemInfo } from '../common';

const getSystemInfoSync = () => isDingdingMiniapp ? dd.getSystemInfoSync() : my.getSystemInfoSync();

export default formatSystemInfo(getSystemInfoSync);
