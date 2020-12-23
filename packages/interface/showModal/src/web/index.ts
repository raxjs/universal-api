import { ShowModalOptions } from '../types';
import { initApi } from '../common';

const showModal = (options: ShowModalOptions) => {
  const { content, showCancel, success = () => {}, fail = () => {}, complete = () => {}} = options;
  try {
    if (showCancel) {
      const confirm = window.confirm(content);
      const res = confirm ? {confirm: true} : {confirm: false};
      success(res);
      complete(res);
    } else {
      window.alert(content);
      success({confirm: true});
      complete({confirm: true});
    }
  } catch (e) {
    fail(e);
    complete(e);
  }
};

export default initApi(showModal);
