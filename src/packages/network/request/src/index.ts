import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp, isKuaiShouMiniProgram, isBaiduSmartProgram } from '@uni/env';
import {
  RequestOptions,
} from './types';
import webModule from './web/index';
import aliMiniAppModule from './ali-miniapp/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';
import baiDuModule from './baidu-smartprogram/index';
import kuaiShouModule from './kuaishou-miniprogram/index';

export default (options: RequestOptions) => {
  if (isWeb) {
    return webModule(options);
  } else if (isKuaiShouMiniProgram) {
    return kuaiShouModule(options);
  } else if (isWeChatMiniProgram) {
    return weChatModule(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule(options);
  } else if (isMiniApp) {
    return aliMiniAppModule(options);
  } else if (isBaiduSmartProgram) {
    return baiDuModule(options);
  } else {
    throw new Error('Uni API：request暂不支持');
  }
};

