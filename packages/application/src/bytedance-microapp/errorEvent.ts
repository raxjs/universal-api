
import {
  Callback, RejectCallback
} from '../types';

export const onError = (cb: Callback) => {
  return tt.onError(cb);
};
export const offError = (cb?: Callback) => {
  return tt.offError(cb);
};
export const onUnhandledRejection = (cb: RejectCallback) => {
  return tt.onUnhandledRejection(cb);
};
export const offUnhandledRejection = (cb?: RejectCallback) => {
  return tt.offUnhandledRejection(cb);
};