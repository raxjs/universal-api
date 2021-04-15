import { Callback } from '../types';

const onChange = (cb: Callback) => {
  return tt.onAccelerometerChange(cb);
};
export default onChange;
