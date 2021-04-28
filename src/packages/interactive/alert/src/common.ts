import { promisify } from '@utils/promisify';
import { styleIn } from '@utils/styleOptions';

export function styleOptions(options) {
  const DEFAULT_REQUEST_OPTIONS = {
    content: '',
    title: '',
    buttonText: '确定',
  };
  return {
    ...DEFAULT_REQUEST_OPTIONS,
    ...options,
  };
}
export function normalize(api, containerName) {
  return (args) => {
    return promisify(api)(styleOptions(styleIn(args, containerName)));
  };
}
