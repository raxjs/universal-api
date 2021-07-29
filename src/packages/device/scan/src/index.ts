import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp, isKuaiShouMiniProgram, isBaiduSmartProgram } from '@uni/env';
import aliMiniAppModule from './ali-miniapp/index';
import webModule from './web/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';
import baiDuModule from './baidu-smartprogram/index';
import kuaiShouModule from './kuaishou-miniprogram';
import { ScanCodeOptions } from './types';

export const scanCode = (args?: ScanCodeOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule(args);
  } else if (isMiniApp) {
    return aliMiniAppModule(args);
  } else if (isKuaiShouMiniProgram) {
    return kuaiShouModule(args);
  } else if (isBaiduSmartProgram) {
    return baiDuModule(args);
  } else if (isWeb) {
    return webModule();
  } else {
    throw new Error('Uni API：scanCode暂不支持');
  }
};

export default scanCode;
