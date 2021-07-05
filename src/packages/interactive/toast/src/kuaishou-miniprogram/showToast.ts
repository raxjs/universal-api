import { normalize } from '../utils/index';
import { ShowToastOption } from '../types';

export const show = normalize((options: ShowToastOption): void => {
  const { type, content, duration, success, fail, complete } = options;
  const iconMap = {
    success: 'success',
    // fail: 'error',
    none: 'none',
  };
  if (type === 'fail') {
    ks.showToast({
      image: 'https://gw.alicdn.com/imgextra/i2/O1CN01XzxlKk1GL8IyXoqEa_!!6000000000605-2-tps-200-200.png',
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
  } else {
    ks.showToast({
      icon: iconMap[type] || 'none',
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
  }
});

export default show;
