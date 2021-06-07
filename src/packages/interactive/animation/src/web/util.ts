import { AnimationOptions } from '../types';
import { normalizeOptions } from '@/packages/interactive/animation/src/common';
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

