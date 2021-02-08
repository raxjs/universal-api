import { isMiniApp, isDingdingMiniapp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from '@uni/env';
import aliMiniAppModule from './ali-miniapp/index';
import webModule from './web/index';
import weChatModule from './wechat-miniapp/index';
import bytedanceModule from './byte-miniapp/index';
import {Options, Alert} from './types';

export const alert: Alert = (args: Options) => {
  if (isWeChatMiniProgram) {
    return weChatModule(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule(args);
  } else if (isMiniApp || isDingdingMiniapp) {
    return aliMiniAppModule(args);
  } else if (isWeb) {
    return webModule(args);
  } else {
    throw new Error('@uni/apis：alert暂不支持');
  }
};

export default alert;
