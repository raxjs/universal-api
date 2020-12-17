import {isMiniappPlatform, isWeb } from 'universal-env';

export default () => {
  if (isMiniappPlatform) {
    return getApp();
  } else if (isWeb) {
    return window;
  } else {
    throw new Error('evapi：getApp暂不支持');
  }
};
