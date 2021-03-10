import { promisify } from '../../../../utils/promisify';

export const LONG_DELAY = 3500; // 3.5 seconds
export const SHORT_DELAY = 2000; // 2 seconds
export function styleOptions(options) {
  const DEFAULT_REQUEST_OPTIONS = {
    content: '',
    type: 'none',
    duration: SHORT_DELAY,
  };
  if (typeof options === 'string') {
    return Object.assign({},
      DEFAULT_REQUEST_OPTIONS,
      {
        content: options,
      });
  } else {
    return Object.assign({},
      DEFAULT_REQUEST_OPTIONS,
      options);
  }
}
export function normalize(api) {
  return (options?) => {
    const afterOptions = styleOptions(options);
    return promisify(api)(afterOptions);
  };
}
