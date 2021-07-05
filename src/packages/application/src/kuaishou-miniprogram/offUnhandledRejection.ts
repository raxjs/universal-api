import {
  RejectCallback,
} from '../types';

export default (cb?: RejectCallback) => {
  return ks.offUnhandledRejection(cb);
};
