import { Options } from '../types';
import {initApi} from '../common';

const alert = (options: Options): void => {
  const { title, content, buttonText, success, fail, complete } = options;
  wx.showModal({
    showCancel: false,
    title,
    content,
    confirmText: buttonText,
    success: function(res) {
      success && success(res);
    },
    fail: function(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res);
    }
  });
};

export default initApi(alert);
