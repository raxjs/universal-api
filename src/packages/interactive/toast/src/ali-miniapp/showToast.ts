import { normalize } from '../utils/index';
import { ShowToastOption } from '../types';
import { isDingdingMiniapp } from '@utils/miniappEnvApp';

const show = normalize((options: ShowToastOption): void => {
  const { type, content, duration, success, fail, complete } = options;
  const showToast = isDingdingMiniapp ? dd.showToast : my.showToast;
  showToast({
    type,
    content,
    duration,
    success() {
      success && success();
    },
    fail(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res);
    },
  });
});

export default show;
