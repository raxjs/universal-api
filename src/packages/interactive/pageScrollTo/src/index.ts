import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp, isKuaiShouMiniProgram, isBaiduSmartProgram } from '@uni/env';
import aliMiniAppModule from './ali-miniapp/index';
import webModule from './web/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';
import kuaiShouModule from './kuaishou-miniprogram/index';
import baiDuModule from './baidu-smartprogram/index';
import { Options } from './types';

export function pageScrollTo(options: Options): Promise<void> {
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
    throw new Error('Uni API：pageScrollTo 暂不支持');
  }
}

export default pageScrollTo;
