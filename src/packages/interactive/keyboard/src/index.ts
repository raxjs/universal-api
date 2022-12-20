import { isWeb, isMiniApp, isWeChatMiniProgram, isByteDanceMicroApp, isBaiduSmartProgram, isKuaiShouMiniProgram } from '@uni/env';
import * as aliMiniAppModule from './ali-miniapp';
import * as weChatModule from './wechat-miniprogram';
import * as bytedanceModule from './bytedance-microapp';
import * as kuaiShouModule from './kuaishou-miniprogram';
import * as baiDuModule from './baidu-smartprogram';
import * as webModule from './web';

import { HideOptions } from './types';

const hide = (options: HideOptions) => {
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
