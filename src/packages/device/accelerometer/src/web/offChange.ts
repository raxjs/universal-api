/* eslint-disable @typescript-eslint/no-unused-vars */
import { Callback } from '../types';

const offChange = (cb?: Callback) => {
  throw new Error('Uni API: accelerometer不支持');
};
export default offChange;
