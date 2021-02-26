import { promisify } from '../../utils/promisify';
import { IPushOptions, IPopOptions, IGoOptions, IReplaceOptions, IReLaunchOptions } from './types';

export const normalize = {
  push: (api) => {
    return (options: IPushOptions) => {
      return promisify(api)(options);
    };
  },
  back: (api) => {
    return (options?: IPopOptions) => {
      return promisify(api)(options);
    };
  },
  go: (api) => {
    return (options: IGoOptions) => {
      return promisify(api)(options);
    };
  },
  replace: (api) => {
    return (options: IReplaceOptions) => {
      return promisify(api)(options);
    };
  },
  reLaunch: (api) => {
    return (options: IReLaunchOptions) => {
      return promisify(api)(options);
    };
  },
};
