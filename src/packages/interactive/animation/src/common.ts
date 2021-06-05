import { styleIn } from '@utils/styleOptions';
import { Animation, AnimationData, AnimationOptions } from './types';
import applyWebAnimation from './web/apply';
import { isWeb } from '@uni/env';

/**
 * normalize options
 * @param options
 * @param containerName
 */
export function normalizeOptions(options, containerName) {
  return styleIn(options, containerName);
}

/**
 * normalize unit
 * @param value
 */
export function normalizeUnit(value: number | string) {
  if (typeof value === 'number') {
    return `${value}px`;
  }
  return value;
}

/**
 * merge default options
 * @param options
 */
export function getDefaultOptions(options?: AnimationOptions): AnimationOptions {
  return {
    duration: 400,
    timingFunction: 'linear',
    delay: 0,
    transformOrigin: '50% 50% 0',
    ...options,
  };
}

/**
 * apply animation for HTML Node
 * @param animation
 * @param dom
 */
export function applyAnimation(animation: Animation, dom?: HTMLElement): AnimationData {
  const data = animation.export();
  if (isWeb) {
    applyWebAnimation(data, dom);
  }
  return data;
}
