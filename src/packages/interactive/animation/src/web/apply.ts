import { AnimationData } from '../types';

export default function applyWebAnimation(data: AnimationData, dom?: HTMLElement) {
  // If `dom` is not HTML Node, ignore
  if (!(dom && dom.nodeType === 1)) {
    return;
  }

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
  data.actions.forEach((action) => {
    if (delay > 0) {
      setTimeout(() => {
        delay += applyAction(action);
      }, delay);
    } else {
      delay += applyAction(action);
    }
  });
}
