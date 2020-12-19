import { OPTION_STRUCT } from '../types';

const setStorageSync = (arg: OPTION_STRUCT) => {
  return wx.setStorageSync(arg.key, arg.data);
}

export default setStorageSync;
