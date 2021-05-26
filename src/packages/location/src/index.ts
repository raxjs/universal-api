import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from '@uni/env';
import aliMiniAppModule from './ali-miniapp/index';
import webModule from './web/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';
import { OptionStruct, OpenOptionStruct } from './types';

export const getLocation = (args: OptionStruct) => {
  if (isWeChatMiniProgram) {
    return weChatModule.getLocation(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.getLocation(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.getLocation(args);
  } else if (isWeb) {
    return webModule.getLocation(args);
  } else {
    throw new Error('Uni API：getLocation暂不支持');
  }
};

export const openLocation = (args: OpenOptionStruct) => {
  if (isWeChatMiniProgram) {
    return weChatModule.openLocation(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.openLocation(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.openLocation(args);
  } else {
    throw new Error('Uni API：openLocation暂不支持');
  }
};

export default {
  getLocation,
  openLocation,
};
