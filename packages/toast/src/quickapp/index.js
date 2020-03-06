import prompt from "@system.prompt";

const LONG_DELAY = 1;
const SHORT_DELAY = 0;

const Toast = {
  SHORT: SHORT_DELAY,
  LONG: LONG_DELAY,
  show(message = "", duration = SHORT_DELAY) {
    prompt.showToast({
      message,
      duration
    });
  }
};

export default Toast;
