import { isMiniApp, isDingdingMiniapp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from 'universal-env';
import aliMiniAppModule from './ali-miniapp/index';
import webModule from './web/index';
import weChatModule from './wechat-miniapp/index';
import bytedanceModule from './byte-miniapp/index';
import { CreateIntersectionObserver } from './types';

const createIntersectionObserver: CreateIntersectionObserver = (...args) => {
  if (isWeChatMiniProgram) {
    return weChatModule(...args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule(...args);
  } else if (isMiniApp || isDingdingMiniapp) {
    return aliMiniAppModule(...args);
  } else if (isWeb) {
    return webModule(...args);
  } else {
    throw new Error('universal-api：IntersectionObserver暂不支持');
  }
};

export default createIntersectionObserver;
