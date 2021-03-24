import { LONG_DELAY, SHORT_DELAY, normalize } from '../utils/index';
import { ShowToastOption, HideToastOption } from '../types';
import { isDingdingMiniapp } from '@utils/miniappEnvApp';

export const show = normalize((options: ShowToastOption): void => {
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
export const hide = normalize((options?: HideToastOption): void => {
  const hideToast = isDingdingMiniapp ? dd.hideToast : my.hideToast;
  hideToast(options);
});
export const SHORT = SHORT_DELAY;
export const LONG = LONG_DELAY;

export default {
  SHORT,
  LONG,
  show,
  hide,
};
