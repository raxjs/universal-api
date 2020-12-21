// eslint-disable-next-line import/no-extraneous-dependencies
import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from 'universal-env';
import webModule from './web/index';
import aliMiniAppModule from './ali-miniapp/index';
import weChatModule from './wechat-miniapp/index';
import bytedanceModule from './byte-miniapp/index';

export default (options) => {
  if (isWeChatMiniProgram) {
    return weChatModule(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule(options);
  } else if (isMiniApp) {
    return aliMiniAppModule(options);
  } else if (isWeb) {
    return webModule(options);
  } else {
    throw new Error('universal-api：canvas暂不支持');
  }
};

