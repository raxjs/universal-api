import { isMiniApp, isDingdingMiniapp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from 'universal-env';
import aliMiniAppModule from './ali-miniapp/index';
import webModule from './web/index';
import weChatModule from './wechat-miniapp/index';
import bytedanceModule from './byte-miniapp/index';

export const getLocation = (() => {
  if (isWeChatMiniProgram) {
    return weChatModule.getLocation;
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.getLocation;
  } else if (isMiniApp || isDingdingMiniapp) {
    return aliMiniAppModule.getLocation;
  } else if (isWeb) {
    return webModule.getLocation;
  } else {
    throw new Error('universal-api：getLocation暂不支持');
  }
})();

export const openLocation = (() => {
  if (isWeChatMiniProgram) {
    return weChatModule.openLocation;
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.openLocation;
  } else if (isMiniApp || isDingdingMiniapp) {
    return aliMiniAppModule.openLocation;
  } else {
    throw new Error('universal-api：openLocation暂不支持');
  }
})();

export default {
  getLocation,
  openLocation
};
