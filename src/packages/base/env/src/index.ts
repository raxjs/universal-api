declare const WXEnvironment: any;
declare const __kraken__: any;
declare const my: any;
declare const wx: any;
declare const tt: any;
declare const swan: any;
declare const ks: any;
declare const global: any;
declare const process: any;

export const isWeb = typeof window !== 'undefined' && 'onload' in window;
export const isNode = typeof process !== 'undefined' && !!(process.versions && process.versions.node);
export const isWeex = typeof WXEnvironment !== 'undefined' && WXEnvironment.platform !== 'Web';
export const isKraken = typeof __kraken__ !== 'undefined';
export const isMiniApp = typeof my !== 'undefined' && my !== null && typeof my.alert !== 'undefined';
export const isByteDanceMicroApp = typeof tt !== 'undefined' && tt !== null && typeof tt.showToast !== 'undefined';
export const isBaiduSmartProgram = typeof swan !== 'undefined' && swan !== null && typeof swan.showToast !== 'undefined';
export const isKuaiShouMiniProgram = typeof ks !== 'undefined' && ks !== null && typeof ks.showToast !== 'undefined';
// In wechat mini program, wx.request is a function
// In wechat mini propgram webview, there is no wx.request, but exist wx.miniProgram
// In bytedance maicro app, there is wx variable.
export const isWeChatMiniProgram = !isByteDanceMicroApp && typeof wx !== 'undefined' && wx !== null && (typeof wx.request !== 'undefined' || typeof wx.miniProgram !== 'undefined');
export const isQuickApp = typeof global !== 'undefined' && global !== null && typeof global.callNative !== 'undefined' && !isWeex;

export default {
  isWeb,
  isNode,
  isWeex,
  isKraken,
  isMiniApp,
  isByteDanceMicroApp,
  isBaiduSmartProgram,
  isKuaiShouMiniProgram,
  isWeChatMiniProgram,
  isQuickApp,
};
