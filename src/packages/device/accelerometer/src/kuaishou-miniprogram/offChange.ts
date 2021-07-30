import { Callback } from '../types';

const offChange = (cb?: Callback) => {
  return ks.offAccelerometerChange(cb);
};
export default offChange;
