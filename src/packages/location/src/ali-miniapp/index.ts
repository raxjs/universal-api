import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { normalizeGetLocation, normalizeOpenLocation } from '../common';

export const getLocation = normalizeGetLocation((args) => (isDingdingMiniapp ? dd.getLocation(args) : my.getLocation(args)));

export const openLocation = normalizeOpenLocation((args) => {
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
