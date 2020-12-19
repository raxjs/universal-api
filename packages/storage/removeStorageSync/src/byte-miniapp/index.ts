import { OPTION_STRUCT } from '../types';

const removeStorageSync = (arg: OPTION_STRUCT) => {
  return tt.removeStorageSync(arg.key);
}

export default removeStorageSync;
