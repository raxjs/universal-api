import { isMiniApp, isDingdingMiniapp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from 'universal-env';
import aliMiniAppModule from './ali-miniapp/index';
import webModule from './web/index';
import weChatModule from './wechat-miniapp/index';
import bytedanceModule from './byte-miniapp/index';

export const showLoading = (() => {
  if (isWeChatMiniProgram) {
    return weChatModule.showLoading;
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.showLoading;
  } else if (isMiniApp || isDingdingMiniapp) {
    return aliMiniAppModule.showLoading;
  } else if (isWeb) {
    return webModule.showLoading;
  } else {
    throw new Error('universal-api：showLoading暂不支持');
  }
})();

export const hideLoading = (() => {
  if (isWeChatMiniProgram) {
    return weChatModule.hideLoading;
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.hideLoading;
  } else if (isMiniApp || isDingdingMiniapp) {
    return aliMiniAppModule.hideLoading;
  } else if (isWeb) {
    return webModule.hideLoading;
  } else {
    throw new Error('universal-api：hideLoading暂不支持');
  }
})();

export default {
  showLoading,
  hideLoading
};
