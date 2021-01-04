import { initApiGetOrRemove, initApiSet } from '../common';
import { getOrRemoveSyncOptionStruct, setSyncOptionStruct } from '../types';

export const getStorage = initApiGetOrRemove((args) => tt.getStorage(args));

export const getStorageSync = (arg: getOrRemoveSyncOptionStruct) => {
  return {data: tt.getStorageSync(arg.key)};
}

export const setStorage = initApiSet((args) => tt.setStorage(args));

export const setStorageSync = (arg: setSyncOptionStruct) => {
  return tt.setStorageSync(arg.key, arg.data);
}

export const removeStorage = initApiGetOrRemove((args) => tt.removeStorage(args));

export const removeStorageSync = (arg: getOrRemoveSyncOptionStruct) => {
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
