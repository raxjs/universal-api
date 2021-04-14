import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { styleIn } from '@utils/styleOptions';
import { CONTAINER_NAME } from '@utils/constant';

const removeStorageSync = (args) => (isDingdingMiniapp ? dd.removeStorageSync(styleIn(args, CONTAINER_NAME.ALIPAY)) : my.removeStorageSync(styleIn(args, CONTAINER_NAME.ALIPAY)));

export default removeStorageSync;
