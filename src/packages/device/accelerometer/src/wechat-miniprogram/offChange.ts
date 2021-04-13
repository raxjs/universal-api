import { Callback } from '../types';

const offChange = (cb?: Callback) => {
  return wx.offAccelerometerChange(cb);
};
export default offChange;
