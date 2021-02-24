// eslint-disable-next-line import/no-extraneous-dependencies
import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from '@uni/env';
import webModule from './web/index';
import aliMiniAppModule from './ali-miniapp/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';
import { Options, Canvas, CanvasContext } from './types';

export const createContext = function(canvasOptions: Options): Promise<CanvasContext> {
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
let res: Canvas;
if (isWeChatMiniProgram) {
  res = weChatModule;
} else if (isByteDanceMicroApp) {
  res = bytedanceModule;
} else if (isMiniApp) {
  res = aliMiniAppModule;
} else if (isWeb) {
  res = webModule;
} else {
  throw new Error('@uni：canvas暂不支持');
}
export default res;

