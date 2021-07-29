import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp, isKuaiShouMiniProgram, isBaiduSmartProgram } from '@uni/env';
import aliMiniAppModule from './ali-miniapp/index';
import webModule from './web/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';
import kuaiShouModule from './kuaishou-miniprogram/index';
import baiDuModule from './baidu-smartprogram/index';
import { Options, Alert } from './types';

export const alert: Alert = (args: Options) => {
  if (isWeb) {
    return webModule(args);
  } else if (isWeChatMiniProgram) {
    return weChatModule(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule(args);
  } else if (isMiniApp) {
    return aliMiniAppModule(args);
  } else if (isKuaiShouMiniProgram) {
    return kuaiShouModule(args);
  } else if (isBaiduSmartProgram) {
    return baiDuModule(args);
  } else {
    throw new Error('Uni API：alert暂不支持');
  }
};

export default alert;
