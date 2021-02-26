import { normalizeGetLocation, normalizeOpenLocation } from '../common';

export const getLocation = normalizeGetLocation((args) => tt.getLocation(args));

export const openLocation = normalizeOpenLocation((args) => tt.openLocation(args));

export default {
  getLocation,
  openLocation,
};
