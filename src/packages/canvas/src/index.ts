// eslint-disable-next-line import/no-extraneous-dependencies
import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp, isBaiduSmartProgram, isKuaiShouMiniProgram } from '@uni/env';
import * as webModule from './web/index';
import * as aliMiniAppModule from './ali-miniapp/index';
import * as weChatModule from './wechat-miniprogram/index';
import * as bytedanceModule from './bytedance-microapp/index';
import * as kuaiShouModule from './kuaishou-miniprogram/index';
import * as baiDuModule from './baidu-smartprogram/index';
import { Options, CanvasContext } from './types';

export const createContext = function (canvasOptions: Options): Promise<CanvasContext> {
  if (isWeb) {
    return webModule.createContext(canvasOptions);
  } else if (isKuaiShouMiniProgram) {
    return kuaiShouModule.createContext(canvasOptions);
  } else if (isWeChatMiniProgram) {
    return weChatModule.createContext(canvasOptions);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.createContext(canvasOptions);
  } else if (isMiniApp) {
    return aliMiniAppModule.createContext(canvasOptions);
  } else if (isBaiduSmartProgram) {
    return baiDuModule.createContext(canvasOptions);
  } else {
    throw new Error('@uni：canvas暂不支持');
  }
};

export default { createContext };
