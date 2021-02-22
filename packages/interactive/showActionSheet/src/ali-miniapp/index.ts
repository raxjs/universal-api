import { isDingdingMiniapp } from '../../../../utils/miniappEnvApp';
import { initApi } from '../common';

const showActionSheet = (args) => isDingdingMiniapp ? dd.showActionSheet(args) : my.showActionSheet(args);

export default initApi(showActionSheet);
