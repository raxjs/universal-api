import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from 'universal-env';
import {
  RequestOptions
} from './types';
import webModule from './web/index';
import aliMiniAppModule from './ali-miniapp/index';
import weChatModule from './wechat-miniapp/index';
import bytedanceModule from './byte-miniapp/index';

export default (options: RequestOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule(options);
  } else if (isMiniApp) {
    return aliMiniAppModule(options);
  } else if (isWeb) {
    return webModule(options);
  }
};

