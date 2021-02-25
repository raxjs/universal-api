import { initApiGetOrRemove, initApiSet, initApiGetStorage } from '../common';
import { GetOrRemoveSyncOptionStruct, SetSyncOptionStruct } from '../types';

export const getStorage = initApiGetStorage((args) => wx.getStorage(args));

export const getStorageSync = (arg: GetOrRemoveSyncOptionStruct) => {
  return { data: wx.getStorageSync(arg.key) };
};

export const setStorage = initApiSet((args) => wx.setStorage(args));

export const setStorageSync = (arg: SetSyncOptionStruct) => {
  return wx.setStorageSync(arg.key, arg.data);
};

export const removeStorage = initApiGetOrRemove((args) => wx.removeStorage(args));

export const removeStorageSync = (arg: GetOrRemoveSyncOptionStruct) => {
  return wx.removeStorageSync(arg.key);
};

export default {
  getStorage,
  getStorageSync,
  setStorage,
  setStorageSync,
  removeStorage,
  removeStorageSync,
};
