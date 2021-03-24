import { LONG_DELAY, SHORT_DELAY, normalize } from '../utils/index';
import { ShowToastOption, HideToastOption } from '../types';

export const show = normalize((options: ShowToastOption): void => {
  const { type, content, duration, success, fail, complete } = options;
  const iconMap = {
    success: 'success',
    fail: 'error',
    none: 'none',
  };
  tt.showToast({
    icon: iconMap[type] || '',
    title: content,
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
  tt.hideToast(options);
});
export const SHORT = SHORT_DELAY;
export const LONG = LONG_DELAY;

export default {
  SHORT,
  LONG,
  show,
  hide,
};
