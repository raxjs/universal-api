import { processStyle, processParams } from '../process';

export default function transition(node: any, styles: any, options: any, callback: any) {
  if (!node) return;

  [options, callback] = processParams(options, callback);

  styles = processStyle(styles);

  const properties = Object.keys(styles);
  const duration = options.duration || 0; // ms
  const timingFunction = options.timingFunction || 'ease';
  const delay = options.delay || 0; // ms
  const transitionValue = properties.length ?
    properties.map((property) => `${property} ${duration}ms ${timingFunction} ${delay}ms`).join(',') :
    `all ${duration}ms ${timingFunction} ${delay}ms`;

  node.style.transition = transitionValue;
  node.style.webkitTransition = transitionValue;

  if (callback) {
    const transitionEndHandler = function(e) {
      e.stopPropagation();
      node.removeEventListener('webkitTransitionEnd', transitionEndHandler);
      node.removeEventListener('transitionend', transitionEndHandler);
      node.style.transition = '';
      node.style.webkitTransition = '';
      callback();
    };
    node.addEventListener('webkitTransitionEnd', transitionEndHandler);
    node.addEventListener('transitionend', transitionEndHandler);
  }

  setTimeout(() => {
    for (const key in styles) {
      // TODO add vendor prefix
      let value = styles[key];
      node.style[key] = value;
    }
    // node.style.transition couldn't be set sync with target transition style, so there should settimeout 30ms
  }, 30);
}
