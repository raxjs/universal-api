import { normalize } from '../utils/index';
import { HideToastOption } from '../types';

declare let window: any;
export const hide = normalize((options?: HideToastOption): void => {
  const { success, fail, complete } = options;
  // remove all queued messages
  try {
    if (!window._uni_toast_status) {
      success && success();
      complete && complete();
      return;
    }
    window._uni_toast_status.queue = [];
    window._uni_toast_inner_toast.switchToNext();
    success && success();
    complete && complete();
  } catch (e) {
    fail && fail(e);
    complete && complete(e);
  }
});

export default hide;
