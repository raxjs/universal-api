
import {
  Callback,
} from '../types';

export default (cb: Callback) => {
  return tt.onError(cb);
};
