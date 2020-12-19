import { OPTION_STRUCT } from '../types';

const removeStorageSync = (arg: OPTION_STRUCT) => {
  return wx.removeStorageSync(arg.key);
}

export default removeStorageSync;
