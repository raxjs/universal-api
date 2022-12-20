import { isWeb, isMiniApp, isWeChatMiniProgram, isByteDanceMicroApp, isBaiduSmartProgram, isKuaiShouMiniProgram } from '@uni/env';
import aliMiniAppModule from './ali-miniapp/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';
import kuaiShouModule from './kuaishou-miniprogram/index';
import baiDuModule from './baidu-smartprogram/index';
import webModule from './web/index';

import { HideOptions } from './types';

export const hide = (options?: HideOptions) => {
  if (isMiniApp) {
    return aliMiniAppModule.hide(options);
  } else if (isWeChatMiniProgram) {
    return weChatModule.hide(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.hide(options);
  } else if (isKuaiShouMiniProgram) {
    return kuaiShouModule.hide(options);
  } else if (isBaiduSmartProgram) {
    return baiDuModule.hide(options);
  } else if (isWeb) {
    return webModule.hide(options);
  } else {
    throw new Error('Uni API：keyboard.hide 暂不支持');
  }
};

export default {
  hide,
};
