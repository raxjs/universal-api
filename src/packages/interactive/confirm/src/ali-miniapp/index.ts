import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { normalize } from '../common';

const confirm = (args) => {
  const params = {
    ...args,
    confirmButtonText: args.confirmText,
    cancelButtonText: args.cancelText,
  };
  isDingdingMiniapp ? dd.confirm(params) : my.confirm(params);
};

export default normalize(confirm);
