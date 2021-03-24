// eslint-disable-next-line import/no-extraneous-dependencies
import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from '@uni/env';
import * as webModule from './web/index';
import * as aliMiniAppModule from './ali-miniapp/index';
import * as weChatModule from './wechat-miniprogram/index';
import * as bytedanceModule from './bytedance-microapp/index';
import { Options, CanvasContext } from './types';

export const createContext = function (canvasOptions: Options): Promise<CanvasContext> {
  if (isWeChatMiniProgram) {
    return weChatModule.createContext(canvasOptions);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.createContext(canvasOptions);
  } else if (isMiniApp) {
    return aliMiniAppModule.createContext(canvasOptions);
  } else if (isWeb) {
    return webModule.createContext(canvasOptions);
  } else {
    throw new Error('@uni：canvas暂不支持');
  }
};

