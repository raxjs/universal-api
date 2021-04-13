
import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import {
  RejectCallback,
} from '../types';

export default (cb: RejectCallback) => {
  return isDingdingMiniapp ? dd.onUnhandledRejection(cb) : my.onUnhandledRejection(cb);
};
