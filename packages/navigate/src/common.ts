import { promisify } from '../../utils/promisify';
import {IPushOptions, IPopOptions, IGoOptions, IReplaceOptions} from './types';

export const initApi = {
  push: (api) => {
    return (options: IPushOptions) => {
      return promisify(api)(options);
    };
  },
  pop: (api) => {
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
};