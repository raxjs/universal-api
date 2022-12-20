import { normalizeHide } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const hide = normalizeHide(({ success = () => {}, fail = () => {}, complete = () => {} }) => {
  try {
    setTimeout(() => {
      if (window && window.document && window.document.activeElement) {
        (window.document.activeElement as HTMLElement).blur();
      }
      success();
      complete();
    }, 0);
  } catch (error) {
    fail();
    complete();
  }
}, CONTAINER_NAME.WEB);

export default hide;
