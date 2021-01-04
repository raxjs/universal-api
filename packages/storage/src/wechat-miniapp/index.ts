import { initApiGetOrRemove, initApiSet } from '../common';
import { getOrRemoveSyncOptionStruct, setSyncOptionStruct } from '../types';

export const getStorage = initApiGetOrRemove((args) => wx.getStorage(args));

export const getStorageSync = (arg: getOrRemoveSyncOptionStruct) => {
  return {data: wx.getStorageSync(arg.key)};
}

export const setStorage = initApiSet((args) => wx.setStorage(args));

export const setStorageSync = (arg: setSyncOptionStruct) => {
  return wx.setStorageSync(arg.key, arg.data);
}

export const removeStorage = initApiGetOrRemove((args) => wx.removeStorage(args));

export const removeStorageSync = (arg: getOrRemoveSyncOptionStruct) => {
  return wx.removeStorageSync(arg.key);
}

export default {
  getStorage,
  getStorageSync,
  setStorage,
  setStorageSync,
  removeStorage,
  removeStorageSync
};
