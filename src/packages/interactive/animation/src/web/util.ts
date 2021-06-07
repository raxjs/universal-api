import { AnimationAction, AnimationOptions } from '../types';
import { normalizeOptions } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

/**
 * normalize unit
 * @param value
 * @param unit
 */
export function normalizeUnit(value: number | string, unit: string) {
  if (typeof value === 'number') {
    return `${value}${unit}`;
  }
  return value;
}

/**
 * merge default options
 * @param options
 */
export function getDefaultOptions(options?: AnimationOptions): AnimationOptions {
  return normalizeOptions(
    {
      duration: 400,
      timingFunction: 'linear',
      delay: 0,
      transformOrigin: '50% 50% 0',
      ...options,
    },
    CONTAINER_NAME.WEB,
  );
}

/**
 * handle animation actions queue
 * @param actions
 * @param fn
 */
export function handleActionsQueue(
  actions: AnimationAction[],
  fn: (action: AnimationAction, callback: () => void) => any,
) {
  actions = actions.slice();
  const action = actions.shift();
  if (action) {
    fn(action, () => {
      handleActionsQueue(actions, fn);
    });
  }
}
