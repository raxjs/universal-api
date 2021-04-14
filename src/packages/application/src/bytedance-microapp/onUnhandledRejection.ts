
import {
  RejectCallback,
} from '../types';

export default (cb: RejectCallback) => {
  return tt.onUnhandledRejection(cb);
};
