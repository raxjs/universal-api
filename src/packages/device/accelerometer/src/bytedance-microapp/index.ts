import {Callback} from '../types';

export const onChange = (cb: Callback) => {
  return tt.onAccelerometerChange(cb);
};
export const offChange = (cb?: Callback) => {
  return tt.offAccelerometerChange(cb);
};
export default {
  onChange,
  offChange
};