import { normalizeHide } from '../common';

declare let window: any;
export const hideLoading = normalizeHide(({ success = () => {}, fail = () => {}, complete = () => {} }) => {
  try {
    setTimeout(() => {
      if (window.__uni_loadingWin && window.__uni_loadingWin.parentNode) {
        window.__uni_loadingWin.parentNode.removeChild(window.__uni_loadingWin);
      }
      window.__uni_loadingWin = null;
      success();
      complete();
    }, 0);
  } catch (error) {
    fail();
    complete();
  }
});

export default hideLoading;
