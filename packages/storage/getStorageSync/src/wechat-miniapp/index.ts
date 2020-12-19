import { OPTION_STRUCT } from '../types';

const getStorageSync = (arg: OPTION_STRUCT) => {
  return wx.getStorageSync(arg.key);
}

export default getStorageSync;
