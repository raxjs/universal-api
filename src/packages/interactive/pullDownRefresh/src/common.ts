import { isWeChatMiniProgram, isByteDanceMicroApp } from '@uni/env';
import { StartOptions, StopOptions } from './types';
import { promisify } from '@utils/promisify';
import { styleIn } from '@utils/styleOptions';

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

