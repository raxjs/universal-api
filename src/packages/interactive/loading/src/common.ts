import { isWeChatMiniProgram, isByteDanceMicroApp } from '@uni/env';
import { HideOptions, ShowOptions } from './types';
import { promisify } from '@utils/promisify';

function styleOptions(options: ShowOptions) {
  if (!options) {
    options = {};
  }
  if (isWeChatMiniProgram || isByteDanceMicroApp) {
    // 在微信和字节小程序中title是必选项，但是可以传空字符串，微信可能存在mask显示透明蒙层，防止触摸穿透的问题，测试的时候看下
    options.title = options.content || '';
    delete options.content;
  }
  return options;
}

/**
 * showLoading
 * @param api
 */
export function normalizeShow(api) {
  return (args?: ShowOptions) => {
    return promisify(api)(styleOptions(args));
  };
}

export function normalizeHide(api) {
  return (args?: HideOptions) => {
    return promisify(api)(args);
  };
}
