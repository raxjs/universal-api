import { isMiniApp, isWeChatMiniProgram, isByteDanceMicroApp } from 'universal-env';
import aliMiniAppModule from './ali-miniapp/index';
import weChatModule from './wechat-miniapp/index';
import bytedanceModule from './byte-miniapp/index';
import {Callback, Accelerometer} from './types';

export const onChange = (cb: Callback) => {
  if (isWeChatMiniProgram) {
    return weChatModule.onChange(cb);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.onChange(cb);
  } else if (isMiniApp) {
    return aliMiniAppModule.onChange(cb);
  } else {
    throw new Error('universal-api：Accelerometer暂不支持');
  }
};
export const offChange = (cb: () => void) => {
  if (isWeChatMiniProgram) {
    return weChatModule.offChange(cb);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule.offChange(cb);
  } else if (isMiniApp) {
    return aliMiniAppModule.offChange(cb);
  } else {
    throw new Error('universal-api：Accelerometer暂不支持');
  }
};
let res: Accelerometer;
if (isWeChatMiniProgram) {
  res = weChatModule;
} else if (isByteDanceMicroApp) {
  res = bytedanceModule;
} else if (isMiniApp) {
  res = aliMiniAppModule;
} else {
  throw new Error('universal-api：Accelerometer暂不支持');
}
export default res;