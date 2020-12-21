import {Callback} from '../types';

export const onChange = (cb: Callback) => {
  return wx.onAccelerometerChange(cb);
};
export const offChange = (cb?: Callback) => {
  return wx.offAccelerometerChange(cb);
};
export default {
  onChange,
  offChange
};