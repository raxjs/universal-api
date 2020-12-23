import { isDingdingMiniapp } from 'universal-env';
import { initApi } from '../common';

const confirm = isDingdingMiniapp ? dd.confirm : my.confirm;
const alert = isDingdingMiniapp ? dd.alert : my.alert;

const showModal = (args) => {
  if (args.showCancel) {
    confirm(args);
  } else {
    alert({args, buttonText: args.confirmButtonText});
  }
};

export default initApi(showModal);
