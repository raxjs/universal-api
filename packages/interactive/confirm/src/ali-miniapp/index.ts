import { isDingdingMiniapp } from '../../../../utils/miniappEnvApp';
import { initApi } from '../common';

const confirm = (args) => {
  const params = {
    ...args,
    confirmButtonText: args.confirmText,
    cancelButtonText: args.cancelText
  };
  isDingdingMiniapp ? dd.confirm(params) : my.confirm(params);
};

export default initApi(confirm);
