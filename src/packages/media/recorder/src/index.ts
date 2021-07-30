import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp, isBaiduSmartProgram } from '@uni/env';
import aliMiniAppModule from './ali-miniapp/index';
import webModule from './web/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';
import baiDuModule from './baidu-smartprogram/index';

export const getRecorderManager = () => {
  if (isWeb) {
    return webModule();
  } else if (isWeChatMiniProgram) {
    return weChatModule();
  } else if (isByteDanceMicroApp) {
    return bytedanceModule();
  } else if (isMiniApp) {
    return aliMiniAppModule();
  } else if (isBaiduSmartProgram) {
    return baiDuModule();
  } else {
    throw new Error('@uni/apis：getRecorderManager暂不支持');
  }
};

export default getRecorderManager;
