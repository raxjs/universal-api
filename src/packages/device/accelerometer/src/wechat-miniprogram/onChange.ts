import { Callback } from '../types';

const onChange = (cb: Callback) => {
  return wx.onAccelerometerChange(cb);
};
export default onChange;
