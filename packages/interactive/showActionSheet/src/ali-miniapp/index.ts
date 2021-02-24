import { isDingdingMiniapp } from '../../../../utils/miniappEnvApp';
import { initApi } from '../common';

const showActionSheet = (args) => {
  args.items = args.itemList;
  isDingdingMiniapp ? dd.showActionSheet(args) : my.showActionSheet(args);
};

export default initApi(showActionSheet);
