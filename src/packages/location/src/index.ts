import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp, isBaiduSmartProgram, isKuaiShouMiniProgram } from '@uni/env';
import aliMiniAppModule from './ali-miniapp/index';
import webModule from './web/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';
import baiDuModule from './baidu-smartprogram/index';
import kuaiShouModule from './kuaishou-miniprogram/index';
import { OptionStruct, OpenOptionStruct, ChooseLocationOptions } from './types';

export const getLocation = (args: OptionStruct) => {
  if (isWeb) {
    return webModule.getLocation(args);
  } else if (isKuaiShouMiniProgram) {
    return kuaiShouModule.getLocation(args);
  } else if (isWeChatMiniProgram) {
    return weChatModule.getLocation(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.getLocation(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.getLocation(args);
  } else if (isBaiduSmartProgram) {
    return baiDuModule.getLocation(args);
  } else {
    throw new Error('Uni API：getLocation暂不支持');
  }
};

export const openLocation = (args: OpenOptionStruct) => {
  if (isKuaiShouMiniProgram) {
    return kuaiShouModule.openLocation(args);
  } else if (isWeChatMiniProgram) {
    return weChatModule.openLocation(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.openLocation(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.openLocation(args);
  } else if (isBaiduSmartProgram) {
    return baiDuModule.openLocation(args);
  } else {
    throw new Error('Uni API：openLocation暂不支持');
  }
};

export const chooseLocation = (args: ChooseLocationOptions) => {
  if (isKuaiShouMiniProgram) {
    return kuaiShouModule.chooseLocation(args);
  } else if (isWeChatMiniProgram) {
    return weChatModule.chooseLocation(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.chooseLocation(args);
  } else if (isMiniApp) {
    return aliMiniAppModule.chooseLocation(args);
  } else if (isBaiduSmartProgram) {
    return baiDuModule.chooseLocation(args);
  } else {
    throw new Error('@uni/apis：chooseLocation暂不支持');
  }
};

export default {
  getLocation,
  openLocation,
  chooseLocation,
};
