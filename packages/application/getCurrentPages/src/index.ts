import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from 'universal-env';
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
    throw new Error('universal-api：getCurrentPages暂不支持');
  }
};

