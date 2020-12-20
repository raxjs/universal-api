import { isWeChatMiniProgram, isByteDanceMicroApp } from 'universal-env';
import { promisify } from '../../../utils/promisify';
import { PARAMS } from './types';

export function styleOptions(options) {
  if (isWeChatMiniProgram || isByteDanceMicroApp) {
    options.data = options.text;
    delete options.text;
  }
  return options;
}

export function initApi(api) {
  return (args: PARAMS) => {
    return promisify(api)(styleOptions(args));
  };
}
