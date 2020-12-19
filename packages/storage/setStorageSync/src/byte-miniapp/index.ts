import { OPTION_STRUCT } from '../types';

const setStorageSync = (arg: OPTION_STRUCT) => {
  return tt.setStorageSync(arg.key, arg.data);
}

export default setStorageSync;
