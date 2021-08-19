/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
/* eslint-disable no-empty */
import { promisify } from '@utils/promisify';
import { Options } from './types';
import { styleIn } from '@utils/styleOptions';

export function styleOptions(options) {
  const DEFAULT_REQUEST_OPTIONS: Options = {
    scope: 'auth_base',
  };
  const afterOptions = { ...DEFAULT_REQUEST_OPTIONS,
    ...options,
  };
  return afterOptions;
}
export function normalize(api, containerName) {
  return (options) => {
    const afterOptions = styleOptions(styleIn(options, containerName));

    return promisify(api)(afterOptions);
  };
}
