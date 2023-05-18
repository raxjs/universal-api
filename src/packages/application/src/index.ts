import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp, isKuaiShouMiniProgram, isBaiduSmartProgram } from '@uni/env';
import aliMiniAppModule from './ali-miniapp/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';
import webModule from './web/index';
import kuaiShouModule from './kuaishou-miniprogram/index';
import baiDuModule from './baidu-smartprogram/index';

const getApis = () => {
  if (isWeb) {
    return webModule;
  } else if (isKuaiShouMiniProgram) {
    return kuaiShouModule;
  } else if (isWeChatMiniProgram) {
    return weChatModule;
  } else if (isByteDanceMicroApp) {
    return bytedanceModule;
  } else if (isMiniApp) {
    return aliMiniAppModule;
  } else if (isBaiduSmartProgram) {
    return baiDuModule;
  } else {
    throw new Error('@uni：application 暂不支持');
  }
};
const apis = getApis();
export default apis;
