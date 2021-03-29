/* eslint-disable @typescript-eslint/no-unused-vars */
import { Callback } from '../types';

const onChange = (cb: Callback) => {
  throw new Error('@uni/apis: accelerometer不支持');
};
export default onChange;
