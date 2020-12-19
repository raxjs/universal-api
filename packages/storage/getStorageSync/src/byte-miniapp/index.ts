import { OPTION_STRUCT } from '../types';

const getStorageSync = (arg: OPTION_STRUCT) => {
  return tt.getStorageSync(arg.key);
}

export default getStorageSync;
