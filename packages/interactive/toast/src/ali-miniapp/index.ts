import {LONG_DELAY, SHORT_DELAY, initApi} from '../utils/index';
import { ShowToastOption, HideToastOption } from '../types';
import { isDingdingMiniapp } from '@uni/env';

export const show = initApi((options: ShowToastOption): void => {
  let { type, content, duration, success, fail, complete } = options;
  const showToast = isDingdingMiniapp ? dd.showToast : my.showToast;
  showToast({
    type,
    content,
    duration,
    success: function() {
      success && success();
    },
    fail: function(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res);
    }
  });
});
export const hide = initApi((options?: HideToastOption): void => {
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