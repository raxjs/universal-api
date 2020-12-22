import { initApiGetLocation, initApiOpenLocation } from '../common';

export const getLocation = initApiGetLocation(tt.getLocation);

export const openLocation = initApiOpenLocation(tt.openLocation);

export default {
  getLocation,
  openLocation
};
