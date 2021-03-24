
import {
  RejectCallback,
} from '../types';

export default (cb: RejectCallback) => {
  return window.addEventListener('unhandledrejection', cb);
};
