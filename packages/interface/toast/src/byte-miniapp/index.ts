import {LONG_DELAY, SHORT_DELAY, initApi} from '../utils/index';
import { ToastOption, ShowToastOption, HideToastOption } from '../types';

let Toast: ToastOption = {
  SHORT: SHORT_DELAY,
  LONG: LONG_DELAY,

  /*
   * @param message {String}
   * @param duration {Number}
   * @param userStyle {Object} user defined style
   */
  show: initApi((options: ShowToastOption): void => {
    let { type, content, duration, success, fail, complete } = options;
    let iconMap = {
      success: 'success',
      fail: 'error',
      none: ''
    };
    tt.showToast({
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
  }),

  hide: initApi((options?: HideToastOption): void => {
    tt.hideToast(options);
  })
};

export default Toast;
