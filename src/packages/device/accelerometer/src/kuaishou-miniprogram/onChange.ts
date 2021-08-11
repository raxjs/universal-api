import { Callback } from '../types';

const onChange = (cb: Callback) => {
  return ks.onAccelerometerChange(cb);
};
export default onChange;
