import { isDingdingMiniapp } from 'universal-env';
import { initApi } from '../common';

const confirm = isDingdingMiniapp ? dd.confirm : my.confirm;
const alert = isDingdingMiniapp ? dd.alert : my.alert;

const showModal = (args) => {
  if (args.showCancel) {
    confirm({...args, confirmButtonText: args.confirmText, cancelButtonText: args.cancelText});
  } else {
    alert({...args, buttonText: args.confirmText});
  }
};

export default initApi(showModal);
