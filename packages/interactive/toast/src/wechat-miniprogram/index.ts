import {LONG_DELAY, SHORT_DELAY, normalize} from '../utils/index';
import { ShowToastOption, HideToastOption } from '../types';

export const show = normalize((options: ShowToastOption): void => {
  let { type, content, duration, success, fail, complete } = options;
  let iconMap = {
    success: 'success',
    fail: 'error',
    none: 'none'
  };
  wx.showToast({
    icon: iconMap[type] || '',
    title: content,
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
export const hide = normalize((options?: HideToastOption): void => {
  wx.hideToast(options);
});
export const SHORT = SHORT_DELAY;
export const LONG = LONG_DELAY;

export default {
  SHORT,
  LONG,
  show,
  hide,
};