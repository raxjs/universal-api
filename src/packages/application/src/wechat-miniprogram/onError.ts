
import {
  Callback,
} from '../types';

export default (cb: Callback) => {
  return wx.onError(cb);
};
