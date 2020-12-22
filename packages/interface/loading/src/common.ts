import { isWeChatMiniProgram, isByteDanceMicroApp } from 'universal-env';
import { HideOptions, ShowOptions } from './types';
import { promisify } from '../../../utils/promisify';

function styleOptions(options: ShowOptions) {
  if (isWeChatMiniProgram || isByteDanceMicroApp) {
    // 在微信和字节小程序中title是必选项，但是可以传空字符串
    options.title = options.content || '';
    delete options.content;
  }
  return options;
}

/**
 * showLoading
 * @param api 
 */
export function initApiShow(api) {
  return (args: ShowOptions) => {
    return promisify(api)(styleOptions(args));
  }
}

export function initApiHide(api) {
  return (args: HideOptions) => {
    return promisify(api)(args);
  }
}
