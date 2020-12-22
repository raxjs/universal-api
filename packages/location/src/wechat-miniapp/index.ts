import { initApiGetLocation, initApiOpenLocation } from '../common';

export const getLocation = initApiGetLocation(wx.getLocation);

export const openLocation = initApiOpenLocation(wx.openLocation);

export default {
  getLocation,
  openLocation
};
