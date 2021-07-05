import {
  Callback,
} from '../types';

export default (cb?: Callback) => {
  return swan.offError(cb);
};
