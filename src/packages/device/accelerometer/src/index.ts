import { isMiniApp, isWeChatMiniProgram, isByteDanceMicroApp, isWeb, isKuaiShouMiniProgram, isBaiduSmartProgram } from '@uni/env';
import aliMiniAppModule from './ali-miniapp/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';
import webModule from './web/index';
import kuaiShouModule from './kuaishou-miniprogram/index';
import baiDuModule from './baidu-smartprogram/index';
import { Callback } from './types';

export const onChange = (cb: Callback) => {
  if (isWeb) {
    return webModule.onChange(cb);
  } else if (isWeChatMiniProgram) {
    return weChatModule.onChange(cb);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.onChange(cb);
  } else if (isMiniApp) {
    return aliMiniAppModule.onChange(cb);
  } else if (isKuaiShouMiniProgram) {
    return kuaiShouModule.onChange(cb);
  } else if (isBaiduSmartProgram) {
    return baiDuModule.onChange(cb);
  } else {
    throw new Error('Uni API：Accelerometer暂不支持');
  }
};
export const offChange = (cb?: Callback) => {
  if (isWeb) {
    return webModule.offChange(cb);
  } else if (isWeChatMiniProgram) {
    return weChatModule.offChange(cb);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.offChange(cb);
  } else if (isMiniApp) {
    return aliMiniAppModule.offChange(cb);
  } else if (isKuaiShouMiniProgram) {
    return kuaiShouModule.offChange(cb);
  } else if (isBaiduSmartProgram) {
    return baiDuModule.offChange(cb);
  } else {
    throw new Error('Uni API：Accelerometer暂不支持');
  }
};
export default {
  onChange,
  offChange,
};
