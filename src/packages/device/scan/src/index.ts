import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp, isKuaiShouMiniProgram, isBaiduSmartProgram } from '@uni/env';
import aliMiniAppModule from './ali-miniapp/index';
import webModule from './web/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';
import baiDuModule from './baidu-smartprogram/index';
import kuaiShouModule from './kuaishou-miniprogram/index';
import { ScanCodeOptions } from './types';

export const scanCode = (args?: ScanCodeOptions) => {
  if (isWeb) {
    return webModule();
  } else if (isKuaiShouMiniProgram) {
    return kuaiShouModule(args);
  } else if (isWeChatMiniProgram) {
    return weChatModule(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule(args);
  } else if (isMiniApp) {
    return aliMiniAppModule(args);
  } else if (isBaiduSmartProgram) {
    return baiDuModule(args);
  } else {
    throw new Error('Uni API：scanCode暂不支持');
  }
};

export default scanCode;
