import { ShowTabBarOptions, HideTabBarOptions } from './types';
import { promisify } from '@utils/promisify';
import { styleIn } from '@utils/styleOptions';

/**
 * showTabBar api
 * @param api
 * @param containerName
 * @returns
 */
export function normalizeShowTabBarOptions(api: (args) => any, containerName: string) {
  return (args?: ShowTabBarOptions) => {
    return promisify(api)(styleIn(args, containerName));
  };
}

/**
 * hideTabBar api
 * @param api
 * @param containerName
 * @returns
 */
export function normalizeHideTabBarOptions(api: (args) => any, containerName: string) {
  return (args?: HideTabBarOptions) => {
    return promisify(api)(styleIn(args, containerName));
  };
}
