import { initApiGetOrRemove, initApiSet } from '../common';
import { GetOrRemoveSyncOptionStruct, SetSyncOptionStruct } from '../types';

export const getStorage = initApiGetOrRemove((args) => tt.getStorage(args));

export const getStorageSync = (arg: GetOrRemoveSyncOptionStruct) => {
  return {data: tt.getStorageSync(arg.key)};
};

export const setStorage = initApiSet((args) => tt.setStorage(args));

export const setStorageSync = (arg: SetSyncOptionStruct) => {
  return tt.setStorageSync(arg.key, arg.data);
};

export const removeStorage = initApiGetOrRemove((args) => tt.removeStorage(args));

export const removeStorageSync = (arg: GetOrRemoveSyncOptionStruct) => {
  return tt.removeStorageSync(arg.key);
};

export default {
  getStorage,
  getStorageSync,
  setStorage,
  setStorageSync,
  removeStorage,
  removeStorageSync
};
