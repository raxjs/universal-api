import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from '@uni/env';
import webModule from './web/index';
import aliMiniAppModule from './ali-miniapp/index';
import weChatModule from './wechat-miniapp/index';
import bytedanceModule from './byte-miniapp/index';

export default () => {
  if (isWeChatMiniProgram) {
    return weChatModule();
  } else if (isByteDanceMicroApp) {
    return bytedanceModule();
  } else if (isMiniApp) {
    return aliMiniAppModule();
  } else if (isWeb) {
    return webModule();
  } else {
    throw new Error('@uni/apis：getLaunchOptionsSync暂不支持');
  }
};

