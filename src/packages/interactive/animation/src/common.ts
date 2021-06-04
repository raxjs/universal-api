import { styleIn } from '@utils/styleOptions';
import { AnimationOptions } from './types';

/**
 * normalize options
 * @param options
 * @param containerName
 */
export function normalizeOptions(options, containerName) {
  return styleIn(options, containerName);
}

/**
 * normalize px unit
 * @param value
 */
export function normalizePxUnit(value: number | string) {
  if (typeof value === 'number') {
    return `${value}px`;
  }
  return value;
}

/**
 * merged by default options
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
