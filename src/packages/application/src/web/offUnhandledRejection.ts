
import {
  RejectCallback,
} from '../types';

export default (cb?: RejectCallback) => {
  return window.removeEventListener('unhandledrejection', cb);
};
