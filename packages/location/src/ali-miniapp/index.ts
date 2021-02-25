import { isDingdingMiniapp } from '../../../utils/miniappEnvApp';
import { initApiGetLocation, initApiOpenLocation } from '../common';

export const getLocation = initApiGetLocation((args) => (isDingdingMiniapp ? dd.getLocation(args) : my.getLocation(args)));

export const openLocation = initApiOpenLocation((args) => {
  const params = {
    ...args,
    latitude: args.latitude,
    longitude: args.longitude,
  };
  isDingdingMiniapp ? dd.openLocation(params) : my.openLocation(params);
});

export default {
  getLocation,
  openLocation,
};
