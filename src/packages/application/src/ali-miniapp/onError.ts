
import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import {
  Callback,
} from '../types';

export default (cb: Callback) => {
  return isDingdingMiniapp ? dd.onError(cb) : my.onError(cb);
};
