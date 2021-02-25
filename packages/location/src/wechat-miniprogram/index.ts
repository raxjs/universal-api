import { initApiGetLocation, initApiOpenLocation } from '../common';

export const getLocation = initApiGetLocation((args) => wx.getLocation(args));

export const openLocation = initApiOpenLocation((args) => wx.openLocation(args));

export default {
  getLocation,
  openLocation,
};
