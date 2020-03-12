declare const WXEnvironment: any;
declare const __kraken__: any;
declare const my: any;
declare const wx: any;
declare const global: any;

function isUndef(type): boolean {
  return type === 'undefined';
}

export const isWeb = !isUndef(typeof window) && 'onload' in window;
export const isNode = !isUndef(typeof process) && !!(process.versions && process.versions.node);
export const isWeex = !isUndef(typeof WXEnvironment) && WXEnvironment.platform !== 'Web';
export const isKraken = !isUndef(typeof __kraken__);
export const isMiniApp = !isUndef(typeof my) && my !== null && !isUndef(typeof my.alert);
// In wechat mini program, wx.login is a function
// In wechat mini propgram webview, there is no wx.login, but exist wx.miniProgram
export const isWeChatMiniProgram = !isUndef(typeof wx) && wx !== null && (!isUndef(typeof wx.login) || !isUndef(typeof wx.miniProgram));
export const isQuickApp = !isUndef(typeof global) && global !== null && !isUndef(typeof global.callNative) && !isWeex || (isWeb && !isUndef(typeof window.navigator) && !isUndef(typeof window.navigator.userAgent) && /hap/.test(window.navigator.userAgent));
