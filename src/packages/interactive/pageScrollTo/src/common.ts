import { promisify } from '@utils/promisify';
import { styleIn } from '@utils/styleOptions';
import { Options } from './types';

export function normalize(api, containerName) {
  return (options: Options) => {
    const mergedOptions = {
      duration: 300,
      ...options,
    };

    // the `scrollTop` has higher priority
    if (mergedOptions.scrollTop != null) {
      mergedOptions.selector = undefined;
    }
    if (!Number(mergedOptions.duration) || mergedOptions.duration < 0) {
      mergedOptions.duration = 0;
    }

    return promisify(api)(styleIn(mergedOptions, containerName));
  };
}
