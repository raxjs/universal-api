
import {
  Callback,
} from '../types';

export default (cb?: Callback) => {
  return window.removeEventListener('error', cb);
};
