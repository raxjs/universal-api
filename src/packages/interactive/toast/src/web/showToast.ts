/* eslint-disable guard-for-in */
import { normalize } from '../utils/index';
import { ShowToastOption, WebQueueOption } from '../types';

declare let window: any;

window._uni_toast_status = window._uni_toast_status || {
  queue: [],
  isProcessing: false,
  toastWin: '',
  toastContent: '',
  toastIcon: '',
};

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
    zIndex: 9999,
  },
  icon: {
    marginBottom: '5px',
    width: '45px',
    height: '45px',
  },
};
function showToastWindow(message: string, iconUrl?: string): void {
  if (!window._uni_toast_status.toastWin) {
    window._uni_toast_status.toastIcon = null;
    window._uni_toast_status.toastWin = document.createElement('div');
    window._uni_toast_status.toastWin.setAttribute('role', 'alert');
    // support for ARIA, add tabindex for focus
    // https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/tabindex
    window._uni_toast_status.toastWin.setAttribute('tabindex', '-1');
    for (const key in styles.container) {
      window._uni_toast_status.toastWin.style[key] = styles.container[key];
    }
    window._uni_toast_status.toastContent = document.createElement('div');
    window._uni_toast_status.toastWin.appendChild(window._uni_toast_status.toastContent);

    document.body.appendChild(window._uni_toast_status.toastWin);
  }
  // 创建icon
  if (window._uni_toast_status.toastIcon && !iconUrl) {
    window._uni_toast_status.toastWin.removeChild(window._uni_toast_status.toastIcon);
    window._uni_toast_status.toastIcon = null;
  } else if (window._uni_toast_status.toastIcon && iconUrl) {
    window._uni_toast_status.toastIcon.setAttribute('src', iconUrl);
  } else if (!window._uni_toast_status.toastIcon && iconUrl) {
    window._uni_toast_status.toastIcon = document.createElement('img');
    window._uni_toast_status.toastIcon.setAttribute('src', iconUrl);
    for (const key in styles.icon) {
      window._uni_toast_status.toastIcon.style[key] = styles.icon[key];
    }
    window._uni_toast_status.toastWin.insertBefore(window._uni_toast_status.toastIcon, window._uni_toast_status.toastContent);
  }
  window._uni_toast_status.toastContent.textContent = message;
  window._uni_toast_status.toastWin.style.transform = 'translateX(-50%)';
  window._uni_toast_status.toastWin.style.webkitTransform = 'translateX(-50%)';
}

function hideToastWindow(): void {
  setTimeout((): void => {
    if (window._uni_toast_status.toastWin && window._uni_toast_status.toastWin.style) {
      window._uni_toast_status.toastWin.style.transform = 'translateX(-50%) scale(0.8)';
      window._uni_toast_status.toastWin.style.webkitTransform = 'translateX(-50%) scale(0.8)';
    }
  }, 0);
}

const innerToast = {
  hideTimer: null,
  show() {
    // All messages had been toasted already, so remove the toast window,
    if (!window._uni_toast_status.queue.length) {
      if (window._uni_toast_status.toastWin) {
        // eslint-disable-next-line
        (window._uni_toast_status.toastWin as any).parentNode.removeChild(window._uni_toast_status.toastWin);
      }
      (window._uni_toast_status.toastWin as any) = null;
      return;
    }

    // the previous toast is not ended yet.
    if (window._uni_toast_status.isProcessing) return;
    window._uni_toast_status.isProcessing = true;

    const toastInfo: WebQueueOption = window._uni_toast_status.queue.shift() as WebQueueOption;
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
    window._uni_toast_status.queue.push(options);
    innerToast.show();
  },
  // Switch to next message
  // This function will hide current, and call `show()` to display next
  // If queue is empty, DOM will be clear in `show()`
  switchToNext() {
    hideToastWindow();
    window._uni_toast_status.isProcessing = false;
    setTimeout(() => innerToast.show(), 500);
    if (innerToast.hideTimer) {
      clearTimeout(innerToast.hideTimer);
      innerToast.hideTimer = null;
    }
  },
};
window._uni_toast_inner_toast = innerToast;
const show = normalize((options: ShowToastOption): void => {
  const { type, content, duration, success, fail, complete } = options;
  const iconMap = {
    success: 'https://gw.alicdn.com/imgextra/i1/O1CN01h684sE1Td4mwYyChK_!!6000000002404-2-tps-200-200.png',
    fail: 'https://gw.alicdn.com/imgextra/i1/O1CN01yOywus1et4ORJzafk_!!6000000003928-2-tps-200-200.png',
    none: '',
  };
  innerToast.push({
    content,
    duration,
    icon: iconMap[type] || '',
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
