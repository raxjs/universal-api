import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { Callback } from '../types';

export const onChange = (cb: Callback) => {
  return isDingdingMiniapp ? dd.onAccelerometerChange(cb) : my.onAccelerometerChange(cb);
};
export const offChange = (cb?: Callback) => {
  return isDingdingMiniapp ? dd.offAccelerometerChange(cb) : my.offAccelerometerChange(cb);
};
export default {
  onChange,
  offChange,
};
