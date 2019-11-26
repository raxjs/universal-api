declare const callNative: any;
declare const WXEnvironment: any;
declare const __kraken__: any;
declare const PHAEnvironment: any;
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
export const isKraken = !isUndef(typeof __kraken__);
export const isPHA =
  !isUndef(typeof PHAEnvironment) && PHAEnvironment.platform !== 'Web';
export const isMiniApp = !isUndef(typeof my) && !isUndef(my.navigateTo);
export const isWeChatMiniProgram =
  !isUndef(typeof wx) && !isUndef(wx.navigateTo);
export const isWeChatMiniprogram = isWeChatMiniProgram;
