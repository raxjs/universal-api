
import {
  RejectCallback,
} from '../types';

export default (cb?: RejectCallback) => {
  return tt.offUnhandledRejection(cb);
};
