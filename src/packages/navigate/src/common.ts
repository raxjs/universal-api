import { promisify } from '@utils/promisify';
import { IPushOptions, IPopOptions, IGoOptions, IReplaceOptions, IReLaunchOptions } from './types';
import { styleIn } from '@utils/styleOptions';

export const normalize = {
  push: (api, containerName) => {
    return (options: IPushOptions) => {
      return promisify(api)(styleIn(options, containerName));
    };
  },
  back: (api, containerName) => {
    return (options?: IPopOptions) => {
      return promisify(api)(styleIn(options, containerName));
    };
  },
  go: (api, containerName) => {
    return (options: IGoOptions) => {
      return promisify(api)(styleIn(options, containerName));
    };
  },
  replace: (api, containerName) => {
    return (options: IReplaceOptions) => {
      return promisify(api)(styleIn(options, containerName));
    };
  },
  reLaunch: (api, containerName) => {
    return (options: IReLaunchOptions) => {
      return promisify(api)(styleIn(options, containerName));
    };
  },
};
