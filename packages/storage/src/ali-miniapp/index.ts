import { isDingdingMiniapp } from '../../../utils/miniappEnvApp';
import { initApiGetOrRemove, initApiSet } from '../common';

export const getStorage = initApiGetOrRemove((args) => isDingdingMiniapp ? dd.getStorage(args) : my.getStorage(args));

export const getStorageSync = (args) => isDingdingMiniapp ? dd.getStorageSync(args) : my.getStorageSync(args);

export const setStorage = initApiSet((args) => isDingdingMiniapp ? dd.setStorage(args) : my.setStorage(args));

export const setStorageSync = (args) => isDingdingMiniapp ? dd.setStorageSync(args) : my.setStorageSync(args);

export const removeStorage = initApiGetOrRemove((args) => isDingdingMiniapp ? dd.removeStorage(args) : my.removeStorage(args));

export const removeStorageSync = (args) => isDingdingMiniapp ? dd.removeStorageSync(args) : my.removeStorageSync(args);

export default {
  getStorage,
  getStorageSync,
  setStorage,
  setStorageSync,
  removeStorage,
  removeStorageSync
};
