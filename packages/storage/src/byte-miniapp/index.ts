import { initApiGetOrRemove, initApiSet } from '../common';
import { GET_OR_REMOVE_SYNC_OPTION_STRUCT, SET_SYNC_OPTION_STRUCT } from '../types';

export const getStorage = initApiGetOrRemove(tt.getStorage);

export const getStorageSync = (arg: GET_OR_REMOVE_SYNC_OPTION_STRUCT) => {
  return tt.getStorageSync(arg.key);
}

export const setStorage = initApiSet(tt.setStorage);

export const setStorageSync = (arg: SET_SYNC_OPTION_STRUCT) => {
  return tt.setStorageSync(arg.key, arg.data);
}

export const removeStorage = initApiGetOrRemove(tt.removeStorage);

export const removeStorageSync = (arg: GET_OR_REMOVE_SYNC_OPTION_STRUCT) => {
  return tt.removeStorageSync(arg.key);
}

export default {
  getStorage,
  getStorageSync,
  setStorage,
  setStorageSync,
  removeStorage,
  removeStorageSync
};
