import { SetNavigationBarTitleOptions, SetNavigationBarColorOptions } from './types';
import { promisify } from '@utils/promisify';
import { styleIn } from '@utils/styleOptions';

/**
 * setNavigationBarTitle api
 * @param api
 * @param containerName
 * @returns
 */
export function normalizeSetNavigationBarTitle(api: (args) => any, containerName: string) {
  return (args?: SetNavigationBarTitleOptions) => {
    return promisify(api)(styleIn(args, containerName));
  };
}

/**
 * setNavigationBarColor api
 * @param api
 * @param containerName
 * @returns
 */
export function normalizeSetNavigationBarColor(api: (args) => any, containerName: string) {
  return (args?: SetNavigationBarColorOptions) => {
    return promisify(api)(styleIn(args, containerName));
  };
}
