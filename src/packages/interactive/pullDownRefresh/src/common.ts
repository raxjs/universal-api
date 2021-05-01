import { isWeChatMiniProgram, isByteDanceMicroApp } from '@uni/env';
import { StartOptions, StopOptions } from './types';
import { promisify } from '@utils/promisify';
import { styleIn } from '@utils/styleOptions';

// function styleOptions(options: StartOptions) {
//   if (!options) {
//     options = {};
//   }
//   if (isWeChatMiniProgram || isByteDanceMicroApp) {
//     // 在微信和字节小程序中title是必选项，但是可以传空字符串，微信可能存在mask显示透明蒙层，防止触摸穿透的问题，测试的时候看下
//     options.title = options.content || '';
//     delete options.content;
//   }
//   return options;
// }

/**
 * startPullDownRefresh api
 * @param api
 * @param containerName
 * @returns
 */
export function normalizeStart(api: (args) => any, containerName: string) {
  return (args?: StartOptions) => {
    return promisify(api)(styleIn(args, containerName));
  };
}

/**
 * stopPullDownRefresh api
 * @param api 
 * @param containerName 
 * @returns 
 */
export function normalizeStop(api: (args) => any, containerName: string) {
  return (args?: StopOptions) => {
    return promisify(api)(styleIn(args, containerName));
  };
}

/**
 * web 端手动刷新开关接口onPullDownRefresh api
 * @param api 
 * @param containerName 
 * @returns 
 */
 export function normalizeSwitch(api: (args) => any, containerName: string) {
  return (args?: StopOptions) => {
    return promisify(api)(styleIn(args, containerName));
  };
}

