import {
  Callback,
} from '../types';

export default (cb?: Callback) => {
  return ks.offError(cb);
};
