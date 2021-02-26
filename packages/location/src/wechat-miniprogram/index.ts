import { normalizeGetLocation, normalizeOpenLocation } from '../common';

export const getLocation = normalizeGetLocation((args) => wx.getLocation(args));

export const openLocation = normalizeOpenLocation((args) => wx.openLocation(args));

export default {
  getLocation,
  openLocation,
};
