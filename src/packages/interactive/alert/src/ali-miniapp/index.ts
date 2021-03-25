import { Options } from '../types';
import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { CONTAINER_NAME } from '@utils/constant';
import { normalize } from '../common';

const alert = (args: Options) => (isDingdingMiniapp ? dd.alert(args) : my.alert(args));

export default normalize(alert, CONTAINER_NAME.ALIPAY);
