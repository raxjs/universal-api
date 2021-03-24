import { normalize } from '../common';
import { GetOrRemoveSyncOptionStruct, SetSyncOptionStruct } from '../types';

export const getStorage = normalize.getStorage((args) => wx.getStorage(args));

export const getStorageSync = (arg: GetOrRemoveSyncOptionStruct) => {
  return { data: wx.getStorageSync(arg.key) };
};

export const setStorage = normalize.setStorage((args) => wx.setStorage(args));

export const setStorageSync = (arg: SetSyncOptionStruct) => {
  return wx.setStorageSync(arg.key, arg.data);
};

export const removeStorage = normalize.removeStorage((args) => wx.removeStorage(args));

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
