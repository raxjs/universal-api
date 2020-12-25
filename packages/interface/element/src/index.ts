import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from 'universal-env';
import aliMiniAppModule from './ali-miniapp/index';
import weChatModule from './wechat-miniapp/index';
import bytedanceModule from './byte-miniapp/index';
import webModule from './web/index';
import {Element} from './types';

export const getScrollOffset = (options: string) => {
  if (isWeChatMiniProgram) {
    return weChatModule.getScrollOffset(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.getScrollOffset(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.getScrollOffset(options);
  } else if (isWeb) {
    return webModule.getScrollOffset(options);
  } else {
    throw new Error('universal-api：element暂不支持');
  }
};
export const getBoundingClientRect = (options: string) => {
  if (isWeChatMiniProgram) {
    return weChatModule.getBoundingClientRect(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.getBoundingClientRect(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.getBoundingClientRect(options);
  } else if (isWeb) {
    return webModule.getBoundingClientRect(options);
  } else {
    throw new Error('universal-api：element暂不支持');
  }
};
let res: Element;
if (isWeChatMiniProgram) {
  res = weChatModule;
} else if (isByteDanceMicroApp) {
  res = bytedanceModule;
} else if (isMiniApp) {
  res = aliMiniAppModule;
} else if (isWeb) {
  res = webModule;
} else {
  throw new Error('universal-api：element暂不支持');
}
export default res;