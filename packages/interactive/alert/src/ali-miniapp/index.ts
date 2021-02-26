import { Options } from '../types';
import { isDingdingMiniapp } from '../../../../utils/miniappEnvApp';
import { normalize } from '../common';

const alert = (args: Options) => isDingdingMiniapp ? dd.alert(args) : my.alert(args);

export default normalize(alert);
