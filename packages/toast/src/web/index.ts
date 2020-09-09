import { LONG_DELAY, SHORT_DELAY } from '../utils/index';
import { ToastOption } from '../types';

interface QueueOption {
  message: string;
  duration: number;
};

let queue: QueueOption[] = [];
let isProcessing = false;
let toastWin: HTMLElement;

const styles = {
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    boxSizing: 'border-box',
    maxWidth: '80%',
    color: '#ffffff',
    padding: '8px 16px',
    position: 'fixed',
    left: '50%',
    bottom: '50%',
    fontSize: '16px',
    lineHeight: '32px',
    fontWeight: '600',
    borderRadius: '4px',
    textAlign: 'center',
    transition: 'all 0.4s ease-in-out',
    webkitTransition: 'all 0.4s ease-in-out',
    transform: 'translateX(-50%)',
    webkitTransform: 'translateX(-50%)',
    zIndex: 9999
  }
};

function showToastWindow(message: string): void {
  if (!toastWin) {
    toastWin = document.createElement('div');
    toastWin.setAttribute('role', 'alert');
    // support for ARIA, add tabindex for focus
    // https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/tabindex
    toastWin.setAttribute('tabindex', '-1');
    for (let key in styles.container) {
      toastWin.style[key] = styles.container[key];
    }
    document.body.appendChild(toastWin);
  }

  toastWin.textContent = message;
  toastWin.style.transform = 'translateX(-50%)';
  toastWin.style.webkitTransform = 'translateX(-50%)';
}

function hideToastWindow(): void {
  setTimeout((): void => {
    if (toastWin && toastWin.style) {
      toastWin.style.transform = 'translateX(-50%) scale(0.8)';
      toastWin.style.webkitTransform = 'translateX(-50%) scale(0.8)';
    }
  }, 0);
}

let hideTimer = null;
function push(message: string, duration: number): void {
  queue.push({
    message,
    duration
  });
  show();
}

// Switch to next message
// This function will hide current, and call `show()` to display next
// If queue is empty, DOM will be clear in `show()`
function switchToNext() {
  hideToastWindow();
  isProcessing = false;
  setTimeout(() => show(), 500);
  if (hideTimer) {
    clearTimeout(hideTimer);
    hideTimer = null;
  }
}

function show() {
  // All messages had been toasted already, so remove the toast window,
  if (!queue.length) {
    if (toastWin) {
      // eslint-disable-next-line
      (toastWin as any).parentNode.removeChild(toastWin);
    }
    (toastWin as any) = null;
    return;
  }

  // the previous toast is not ended yet.
  if (isProcessing) return;
  isProcessing = true;

  let toastInfo: QueueOption = queue.shift() as QueueOption;
  showToastWindow(toastInfo.message);
  hideTimer = setTimeout(() => switchToNext(), toastInfo.duration);
};

const Toast: ToastOption = {
  SHORT: SHORT_DELAY,
  LONG: LONG_DELAY,

  /*
   * @param message {String}
   * @param duration {Number}
   * @param userStyle {Object} user defined style
   */
  show(message: string, duration: number = SHORT_DELAY): void {
    push(message, duration);
  },

  hide() {
    // remove all queued messages
    queue = [];
    switchToNext();
  }
};

export default Toast;
