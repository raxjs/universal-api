declare const callNative: any;
declare const WXEnvironment: any;
declare const __kraken__: any;
declare const my: any;
declare const wx: any;
declare const global: any;

function isUndef(type): boolean {
  return type === 'undefined';
}

export const isQuickApp = !isUndef(typeof global) && global !== null && (!isUndef(global.$app_require$));
// In quickapp, window exists
export const isWeb = !isQuickApp && !isUndef(typeof window) && 'onload' in window;
export const isNode =
  !isUndef(typeof process) && !!(process.versions && process.versions.node);
// In quickapp, callNative exists
export const isWeex =
  !isQuickApp &&
  (!isUndef(typeof callNative) ||
  !isUndef(typeof WXEnvironment) && WXEnvironment.platform !== 'Web');
export const isKraken = !isUndef(typeof __kraken__);
export const isMiniApp = !isUndef(typeof my) && my !== null && !isUndef(my.alert);
// In wechat mini program, wx.login is a function
// In wechat mini propgram webview, there is no wx.login, but exist wx.miniProgram
export const isWeChatMiniProgram = !isUndef(typeof wx) && wx !== null && (!isUndef(wx.login) || !isUndef(wx.miniProgram));
