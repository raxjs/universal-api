
import {
  Callback, RejectCallback,
} from '../types';

export const onError = (cb: Callback) => {
  return window.addEventListener('error', cb);
};
export const offError = (cb?: Callback) => {
  return window.removeEventListener('error', cb);
};
export const onUnhandledRejection = (cb: RejectCallback) => {
  return window.addEventListener('unhandledrejection', cb);
};
export const offUnhandledRejection = (cb?: RejectCallback) => {
  return window.removeEventListener('unhandledrejection', cb);
};
