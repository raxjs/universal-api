
import {
  Callback,
} from '../types';

export default (cb: Callback) => {
  return window.addEventListener('error', cb);
};
