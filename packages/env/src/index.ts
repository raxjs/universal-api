declare const callNative: any;
declare const WXEnvironment: any;
declare const my: any;
declare const wx: any;
declare const getApp: any;

function isUndef(type): boolean {
  return type === 'undefined';
}

export const isWeb = !isUndef(typeof window) && 'onload' in window;
export const isNode =
  !isUndef(typeof process) && !!(process.versions && process.versions.node);
export const isWeex =
  !isUndef(typeof callNative) ||
  !isUndef(typeof WXEnvironment) && WXEnvironment.platform !== 'Web';
export const isMiniApp = !isUndef(typeof getApp) && !isUndef(typeof my) && !isUndef(my.navigateTo);
export const isWeChatMiniProgram =
!isUndef(typeof getApp) && !isUndef(typeof wx) && !isUndef(wx.navigateTo);
