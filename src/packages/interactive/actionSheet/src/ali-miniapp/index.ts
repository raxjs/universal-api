import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { CONTAINER_NAME } from '@utils/constant';
import { normalize } from '../common';

const showActionSheet = (args) => {
  isDingdingMiniapp ? dd.showActionSheet(args) : my.showActionSheet(args);
};

export default normalize(showActionSheet, CONTAINER_NAME.ALIPAY);
