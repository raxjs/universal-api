import { Callback } from '../types';

const offChange = (cb?: Callback) => {
  return swan.stopAccelerometer({ complete: cb });
};
export default offChange;
