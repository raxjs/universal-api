import { AnimationAction } from '../types';
import { handleActionsQueue } from './util';

export default function applyWebAnimation(actions: AnimationAction[], dom?: HTMLElement) {
  // If `dom` is not HTML Node, ignore
  if (!(dom && dom.nodeType === 1)) {
    return;
  }

  // cache original style
  const original = {
    transitionProperty: dom.style.transitionProperty,
    transitionDuration: dom.style.transitionDuration,
    transitionDelay: dom.style.transitionDelay,
    transitionTimingFunction: dom.style.transitionTimingFunction,
    transformOrigin: dom.style.transformOrigin,
  };

  /**
   * Apply animation action, return the current cost time
   * @param action
   */
  const applyAction = (action): number => {
    const { transition, transformOrigin } = action.option;

    let transform = '';
    action.animates.forEach((animate) => {
      if (animate.type === 'style') {
        const [property, value] = animate.args;
        dom.style[property] = value;
      } else {
        transform += ` ${animate.type}(${animate.args.join(',')})`;
      }
    });
    if (transform) {
      dom.style.transform = transform;
    }

    dom.style.transitionProperty = 'all';
    dom.style.transitionDuration = `${transition.duration}ms`;
    dom.style.transitionDelay = `${transition.delay}ms`;
    dom.style.transitionTimingFunction = transition.timingFunction;
    dom.style.transformOrigin = transformOrigin;

    const cost = transition.delay + transition.duration;
    return isNaN(cost) ? 0 : cost;
  };

  let delay = 0;
  handleActionsQueue(actions, (action, callback) => {
    setTimeout(() => {
      delay = applyAction(action);
      callback();
    }, delay);
  }, () => {
    // Restore the style at the end of the animation
    setTimeout(() => {
      Object.assign(dom.style, original);
    }, delay);
  });
}
