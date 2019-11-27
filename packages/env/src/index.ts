declare const callNative: any;
declare const WXEnvironment: any;
declare const my: any;
declare const wx: any;

function isUndef(type): boolean {
  return type === 'undefined';
}

export const isWeb = !isUndef(typeof window) && 'onload' in window;
export const isNode =
  !isUndef(typeof process) && !!(process.versions && process.versions.node);
export const isWeex =
  !isUndef(typeof callNative) ||
  !isUndef(typeof WXEnvironment) && WXEnvironment.platform !== 'Web';
export const isMiniApp = !isUndef(typeof my) && my !== null && !isUndef(my.alert);
export const isWeChatMiniProgram = !isUndef(typeof wx) && wx !== null && (!isUndef(wx.login) || !isUndef(wx.miniProgram));
