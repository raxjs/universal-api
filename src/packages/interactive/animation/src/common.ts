import { styleIn } from '@utils/styleOptions';
import { AnimationOptions } from './types';

/**
 * merge default options
 * @param containerName
 * @param options
 */
export function getDefaultOptions(containerName: string, options?: AnimationOptions): AnimationOptions {
  return styleIn(
    {
      duration: 400,
      timingFunction: 'linear',
      delay: 0,
      transformOrigin: '50% 50% 0',
      ...options,
    },
    containerName,
  );
}
