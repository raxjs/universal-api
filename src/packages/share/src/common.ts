/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
/* eslint-disable no-empty */
import { promisify } from '@utils/promisify';
import { styleIn } from '@utils/styleOptions';

export function styleOptions(options) {
  const afterOptions = {
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
