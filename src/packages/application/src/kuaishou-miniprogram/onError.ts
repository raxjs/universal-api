import {
  Callback,
} from '../types';

export default (cb: Callback) => {
  return ks.onError(cb);
};
