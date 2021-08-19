import { SetNavigationBarTitleOptions, SetNavigationBarColorOptions } from './types';
import { promisify } from '@utils/promisify';
import { styleIn } from '@utils/styleOptions';
import { CONTAINER_NAME } from '@utils/constant';

const styleOptions = (options, containerName) => {
  const afterOptions = { ...options };
  if (!afterOptions.frontColor) {
    afterOptions.frontColor = '#000000';
  }
  return afterOptions;
};

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
    return promisify(api)(styleOptions(styleIn(args, containerName), containerName));
  };
}

// export function normalizeGetMenuButtonBoundingClientRect(api: (args) => any, containerName: string) {
//   return (args?) => {
//     return promisify(api)(args);
//   };
// }
