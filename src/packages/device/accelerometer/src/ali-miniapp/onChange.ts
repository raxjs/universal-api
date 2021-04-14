import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { Callback } from '../types';

const onChange = (cb: Callback) => {
  return isDingdingMiniapp ? dd.onAccelerometerChange(cb) : my.onAccelerometerChange(cb);
};
export default onChange;
