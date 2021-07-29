import { Callback } from '../types';

const onChange = (cb: Callback) => {
  return swan.onAccelerometerChange(cb);
};
export default onChange;
