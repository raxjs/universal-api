import { initApiGetOrRemove, initApiSet } from '../common';
import { GET_OR_REMOVE_SYNC_OPTION_STRUCT, SET_SYNC_OPTION_STRUCT } from '../types';

export const getStorage = initApiGetOrRemove((args) => tt.getStorage(args));

export const getStorageSync = (arg: GET_OR_REMOVE_SYNC_OPTION_STRUCT) => {
  return {data: tt.getStorageSync(arg.key)};
}

export const setStorage = initApiSet((args) => tt.setStorage(args));

export const setStorageSync = (arg: SET_SYNC_OPTION_STRUCT) => {
  return tt.setStorageSync(arg.key, arg.data);
}

export const removeStorage = initApiGetOrRemove((args) => tt.removeStorage(args));

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
