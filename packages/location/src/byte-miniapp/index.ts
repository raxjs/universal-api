import { initApiGetLocation, initApiOpenLocation } from '../common';

export const getLocation = initApiGetLocation((args) => tt.getLocation(args));

export const openLocation = initApiOpenLocation((args) => tt.openLocation(args));

export default {
  getLocation,
  openLocation
};
