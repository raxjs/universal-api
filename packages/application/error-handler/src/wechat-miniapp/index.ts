import {Callback, RejectCallback} from '../types';

export const onError = (cb: Callback) => {
  return wx.onError(cb);
};
export const offError = (cb?: Callback) => {
  return wx.offError(cb);
};
export const onUnhandledRejection = (cb: RejectCallback) => {
  return wx.onUnhandledRejection(cb);
};
export const offUnhandledRejection = (cb?: RejectCallback) => {
  return wx.offUnhandledRejection(cb);
};
export default {
  onError,
  offError,
  onUnhandledRejection,
  offUnhandledRejection,
};