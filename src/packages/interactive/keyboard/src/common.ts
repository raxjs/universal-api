import { HideOptions } from './types';
import { promisify } from '@utils/promisify';
import { styleIn } from '@utils/styleOptions';

/**
 * hideKeyboard api
 * @param api
 * @param containerName
 * @returns
 */
export function normalizeHide(api: (args) => any, containerName: string) {
  return (args?: HideOptions) => {
    return promisify(api)(styleIn(args, containerName));
  };
}
