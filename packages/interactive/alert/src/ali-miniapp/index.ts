import { Options } from '../types';
import { isDingdingMiniapp } from '../../../../utils/miniappEnvApp';
import { initApi } from '../common';

const alert = (args: Options) => isDingdingMiniapp ? dd.alert(args) : my.alert(args);

export default initApi(alert);
