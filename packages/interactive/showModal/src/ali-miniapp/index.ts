import { isDingdingMiniapp } from '../../../../utils/miniappEnvApp';
import { initApi } from '../common';

const confirm = (args) => isDingdingMiniapp ? dd.confirm(args) : my.confirm(args);
const alert = (args) => isDingdingMiniapp ? dd.alert(args) : my.alert(args);

const showModal = (args) => {
  if (args.showCancel) {
    confirm({...args, confirmButtonText: args.confirmText, cancelButtonText: args.cancelText});
  } else {
    alert({...args, buttonText: args.confirmText});
  }
};

export default initApi(showModal);
