import { promisify } from '../../../utils/promisify';

export function styleOptions(options) {
  const DEFAULT_REQUEST_OPTIONS = {
    content: '',
    title: '',
    buttonText: '确定',
  };
  return Object.assign({},
    DEFAULT_REQUEST_OPTIONS,
    options);
}
export function initApi(api) {
  return (args) => {
    return promisify(api)(styleOptions(args));
  };
}