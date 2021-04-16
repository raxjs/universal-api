import { normalize } from '../utils/index';
import { ShowToastOption } from '../types';

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

export default show;
