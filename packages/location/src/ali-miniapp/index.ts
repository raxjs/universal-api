import { isDingdingMiniapp } from '../../../utils/miniappEnvApp';
import { initApiGetLocation, initApiOpenLocation } from '../common';

export const getLocation = initApiGetLocation((args) => isDingdingMiniapp ? dd.getLocation(args) : my.getLocation(args));

export const openLocation = initApiOpenLocation((args) => isDingdingMiniapp ? dd.openLocation(args) : my.openLocation(args));

export default {
  getLocation,
  openLocation
};
