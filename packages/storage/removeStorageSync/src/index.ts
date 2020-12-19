import { isMiniApp, isDingdingMiniapp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from 'universal-env';
import webModule from './web/index';
import aliMiniAppModule from './ali-miniapp/index';
import weChatModule from './wechat-miniapp/index';
import bytedanceModule from './byte-miniapp/index';

const removeStorageSync = (() => {
  if (isWeChatMiniProgram) {
    return weChatModule;
  } else if (isByteDanceMicroApp) {
    return bytedanceModule;
  } else if (isMiniApp || isDingdingMiniapp) {
    return aliMiniAppModule;
  } else if (isWeb) {
    return webModule;
  } else {
    throw new Error('evapi：removeStorageSync暂不支持');
  }
})();

export default removeStorageSync;
