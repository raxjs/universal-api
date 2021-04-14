
import {
  RejectCallback,
} from '../types';

export default (cb: RejectCallback) => {
  return wx.onUnhandledRejection(cb);
};
