import { isDingdingMiniapp } from '../../../../utils/miniappEnvApp';
import { normalize } from '../common';

const showActionSheet = (args) => {
  args.items = args.itemList;
  isDingdingMiniapp ? dd.showActionSheet(args) : my.showActionSheet(args);
};

export default normalize(showActionSheet);
