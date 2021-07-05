import { isWeChatMiniProgram, isByteDanceMicroApp, isBaiduSmartProgram, isKuaiShouMiniProgram } from '@uni/env';
import { HideOptions, ShowOptions } from './types';
import { promisify } from '@utils/promisify';
import { styleIn } from '@utils/styleOptions';

function styleOptions(options: ShowOptions) {
  if (!options) {
    options = {};
  }
  if (isWeChatMiniProgram || isByteDanceMicroApp || isBaiduSmartProgram || isKuaiShouMiniProgram) {
    // 在微信、百度和字节小程序中title是必选项，但是可以传空字符串，快手是选填项，微信可能存在mask显示透明蒙层，防止触摸穿透的问题，测试的时候看下
    options.title = options.content || '';
    delete options.content;
  }
  return options;
}

/**
 * showLoading
 * @param api
 */
export function normalizeShow(api, containerName) {
  return (args?: ShowOptions) => {
    return promisify(api)(styleOptions(styleIn(args, containerName)));
  };
}

export function normalizeHide(api, containerName) {
  return (args?: HideOptions) => {
    return promisify(api)(styleIn(args, containerName));
  };
}
