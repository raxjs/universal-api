import { Callback } from '../types';

export const onChange = (cb: Callback) => {
  throw new Error('@uni/apis: accelerometer不支持');
};
export const offChange = (cb?: Callback) => {
  throw new Error('@uni/apis: accelerometer不支持');
};
export default {
  onChange,
  offChange,
};
