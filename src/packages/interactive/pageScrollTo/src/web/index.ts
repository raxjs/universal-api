import { Options } from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

export default normalize((options: Options) => {
  const { selector, duration, success, fail, complete } = options;
  let { scrollTop } = options;
  const rootElement = document.documentElement;
  let top = rootElement.scrollTop;

  if (scrollTop == null) {
    if (!selector) {
      const msg = '`scrollTop` or `selector` is required';
      fail(msg);
      complete(msg);
      return;
    }
    const ele = document.querySelector(selector);
    if (!ele) {
      const msg = `The element cannot be found by the selector \`${selector}\``;
      fail(msg);
      complete(msg);
      return;
    }

    scrollTop = top + ele.getBoundingClientRect().top;
  }

  // Already at the target position
  if (top === scrollTop) {
    success('OK');
    complete('OK');
    return;
  }

  // Scroll immediately
  if (Number(duration) === 0) {
    rootElement.scrollTop = scrollTop;
    success('OK');
    complete('OK');
    return;
  }

  const maxScrollTop = rootElement.scrollHeight - rootElement.clientHeight;
  if (scrollTop < 0) {
    scrollTop = 0;
  } else if (scrollTop > maxScrollTop) {
    scrollTop = maxScrollTop;
  }

  // Scroll distance per 1ms
  const speed = (scrollTop - top) / duration;

  const handleScroll = (startTime: number) => {
    requestAnimationFrame(() => {
      const cost = Date.now() - startTime;
      if (cost < 5) { // throttle
        handleScroll(startTime);
        return;
      }

      top = rootElement.scrollTop;
      let nextTop = top + cost * speed;
      if ((speed > 0 && nextTop > scrollTop) || (speed < 0 && nextTop < scrollTop)) {
        nextTop = scrollTop;
      }

      rootElement.scrollTop = nextTop;
      if (nextTop === scrollTop) {
        success('OK');
        complete('OK');
      } else {
        handleScroll(Date.now());
      }
    });
  };

  // start scrolling
  handleScroll(Date.now());
}, CONTAINER_NAME.WEB);
