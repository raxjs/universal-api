import { LONG_DELAY, SHORT_DELAY, normalize } from '../utils/index';
import { WebQueueOption, ShowToastOption, HideToastOption } from '../types';

let queue: WebQueueOption[] = [];
let isProcessing = false;
let toastWin: HTMLElement;
let toastContent: HTMLElement;
let toastIcon: HTMLElement;

const styles = {
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    boxSizing: 'border-box',
    maxWidth: '80%',
    color: '#ffffff',
    padding: '8px 16px',
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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
  },
  icon: {
    marginBottom: '5px',
    width: '45px',
    height: '45px',
  }
};
function showToastWindow(message: string, iconUrl?: string): void {
  if (!toastWin) {
    toastIcon = null;
    toastWin = document.createElement('div');
    toastWin.setAttribute('role', 'alert');
    // support for ARIA, add tabindex for focus
    // https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/tabindex
    toastWin.setAttribute('tabindex', '-1');
    for (let key in styles.container) {
      toastWin.style[key] = styles.container[key];
    }
    toastContent = document.createElement('div');
    toastWin.appendChild(toastContent);

    document.body.appendChild(toastWin);
  }
  // 创建icon
  if (toastIcon && !iconUrl) {
    toastWin.removeChild(toastIcon);
    toastIcon = null;
  } else if (toastIcon && iconUrl) {
    toastIcon.setAttribute('src', iconUrl);
  } else if (!toastIcon && iconUrl) {
    toastIcon = document.createElement('img');
    toastIcon.setAttribute('src', iconUrl);
    for (let key in styles.icon) {
      toastIcon.style[key] = styles.icon[key];
    }
    toastWin.insertBefore(toastIcon, toastContent);
  }
  toastContent.textContent = message;
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

const innerToast = {
  hideTimer: null,
  show() {
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

    let toastInfo: WebQueueOption = queue.shift() as WebQueueOption;
    try {
      showToastWindow(toastInfo.content, toastInfo.icon);
    } catch (e) {
      toastInfo.fail && toastInfo.fail(e);
      toastInfo.complete && toastInfo.complete(e);
    }

    innerToast.hideTimer = setTimeout(() => {
      toastInfo.success && toastInfo.success();
      toastInfo.complete && toastInfo.complete();
      innerToast.switchToNext();
    }, toastInfo.duration);
  },
  push(options): void {
    queue.push(options);
    innerToast.show();
  },
  // Switch to next message
  // This function will hide current, and call `show()` to display next
  // If queue is empty, DOM will be clear in `show()`
  switchToNext() {
    hideToastWindow();
    isProcessing = false;
    setTimeout(() => innerToast.show(), 500);
    if (innerToast.hideTimer) {
      clearTimeout(innerToast.hideTimer);
      innerToast.hideTimer = null;
    }
  }
};

export const show = normalize((options: ShowToastOption): void => {
  const { type, content, duration, success, fail, complete } = options;
  const iconMap = {
    success: 'https://gw.alicdn.com/imgextra/i1/O1CN01h684sE1Td4mwYyChK_!!6000000002404-2-tps-200-200.png',
    fail: 'https://gw.alicdn.com/imgextra/i1/O1CN01yOywus1et4ORJzafk_!!6000000003928-2-tps-200-200.png',
    none: ''
  };
  innerToast.push({
    content,
    duration,
    icon: iconMap[type] || '',
    success: function() {
      success && success();
    },
    fail: function(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res);
    }
  });
});
export const hide = normalize((options?: HideToastOption): void => {
  const { success, fail, complete } = options;
  // remove all queued messages
  try {
    queue = [];
    innerToast.switchToNext();
    success && success();
    complete && complete();
  } catch (e) {
    fail && fail(e);
    complete && complete(e);
  }
});
export const SHORT = SHORT_DELAY;
export const LONG = LONG_DELAY;

export default {
  SHORT,
  LONG,
  show,
  hide,
};