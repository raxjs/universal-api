import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { styleIn } from '@utils/styleOptions';
import { CONTAINER_NAME } from '@utils/constant';

const setStorageSync = (args) => (isDingdingMiniapp ? dd.setStorageSync(styleIn(args, CONTAINER_NAME.ALIPAY)) : my.setStorageSync(styleIn(args, CONTAINER_NAME.ALIPAY)));

export default setStorageSync;
