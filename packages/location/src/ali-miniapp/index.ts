import { isDingdingMiniapp } from 'universal-env';
import { initApiGetLocation, initApiOpenLocation } from '../common';

export const getLocation = initApiGetLocation(isDingdingMiniapp ? dd.getLocation : my.getLocation);

export const openLocation = initApiOpenLocation(isDingdingMiniapp ? dd.openLocation : my.openLocation);

export default {
  getLocation,
  openLocation
};
