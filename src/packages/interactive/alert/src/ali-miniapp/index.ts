import { Options } from '../types';
import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const alert = (args: Options) => (isDingdingMiniapp ? dd.alert(args) : my.alert(args));

export default normalize(alert, CONTAINER_NAME.ALIPAY);
