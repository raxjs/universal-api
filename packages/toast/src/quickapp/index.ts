import { ToastOption } from '../types';

const LONG_DELAY = 1;
const SHORT_DELAY = 0;

const Toast: ToastOption = {
  SHORT: SHORT_DELAY,
  LONG: LONG_DELAY,
  /**
   * @param message  {String}
   * @param duration {Number}
   */
  show(message: string, duration: number = SHORT_DELAY): void {
    // eslint-disable-next-line  @typescript-eslint/no-var-requires
    const prompt = require('@system.prompt');
    prompt.showToast({
      message,
      duration
    });
  }
};

export default Toast;
