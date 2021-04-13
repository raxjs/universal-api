import { Callback } from '../types';

const offChange = (cb?: Callback) => {
  return tt.offAccelerometerChange(cb);
};
export default offChange;
