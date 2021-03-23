
import { isDingdingMiniapp } from '../../../utils/miniappEnvApp';
import {
  Callback, RejectCallback,
} from '../types';

export const onError = (cb: Callback) => {
  return isDingdingMiniapp ? dd.onError(cb) : my.onError(cb);
};
export const offError = (cb?: Callback) => {
  return isDingdingMiniapp ? dd.offError(cb) : my.offError(cb);
};
export const onUnhandledRejection = (cb: RejectCallback) => {
  return isDingdingMiniapp ? dd.onUnhandledRejection(cb) : my.onUnhandledRejection(cb);
};
export const offUnhandledRejection = (cb?: RejectCallback) => {
  return isDingdingMiniapp ? dd.offUnhandledRejection(cb) : my.offUnhandledRejection(cb);
};
export default {
  onError,
  offError,
  onUnhandledRejection,
  offUnhandledRejection,
};
