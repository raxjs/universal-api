import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from 'universal-env';
import aliMiniAppModule from './ali-miniapp/index';
import weChatModule from './wechat-miniapp/index';
import bytedanceModule from './byte-miniapp/index';
import webModule from './web/index';
import { IPushOptions, IGoOptions, IPopOptions, IReplaceOptions, INavigate } from './types';

export const push = (options: IPushOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.push(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.push(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.push(options);
  } else if (isWeb) {
    return webModule.push(options);
  } else {
    throw new Error('universal-api：navigate.push暂不支持');
  }
};
export const go = (options: IGoOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.go(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.go(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.go(options);
  } else if (isWeb) {
    return webModule.go(options);
  } else {
    throw new Error('universal-api：navigate.go暂不支持');
  }
};
export const pop = (options?: IPopOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.pop(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.pop(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.pop(options);
  } else if (isWeb) {
    return webModule.pop(options);
  } else {
    throw new Error('universal-api：navigate.pop暂不支持');
  }
};
export const replace = (options: IReplaceOptions) => {
  if (isWeChatMiniProgram) {
    return weChatModule.replace(options);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.replace(options);
  } else if (isMiniApp) {
    return aliMiniAppModule.replace(options);
  } else if (isWeb) {
    return webModule.replace(options);
  } else {
    throw new Error('universal-api：navigate.replace暂不支持');
  }
};
let res: INavigate;
if (isWeChatMiniProgram) {
  res = weChatModule;
} else if (isByteDanceMicroApp) {
  res = bytedanceModule;
} else if (isMiniApp) {
  res = aliMiniAppModule;
} else if (isWeb) {
  res = webModule;
} else {
  throw new Error('universal-api：navigate暂不支持');
}
export default res;