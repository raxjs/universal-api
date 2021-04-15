import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { Callback } from '../types';

const offChange = (cb?: Callback) => {
  return isDingdingMiniapp ? dd.offAccelerometerChange(cb) : my.offAccelerometerChange(cb);
};
export default offChange;
