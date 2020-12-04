import {LONG_DELAY, SHORT_DELAY} from '../utils/index';
import { ToastOption } from '../types';

declare const weex: any;

let Toast: ToastOption = {
  SHORT: SHORT_DELAY,
  LONG: LONG_DELAY,

  /*
   * @param message {String}
   * @param duration {Number}
   * @param userStyle {Object} user defined style
   */
  show(message: string, duration: number = SHORT_DELAY): void {
    const modal = weex.requireModule('modal');

    if (modal.toast) {
      modal.toast({
        message,
        duration: Number(duration) / 1000,
      });
    }
  },

  hide() {
    console.error('hide toast not supported yet');
  }
};

export default Toast;
