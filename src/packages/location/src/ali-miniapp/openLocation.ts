import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { CONTAINER_NAME } from '@utils/constant';
import { normalizeOpenLocation } from '../common';

const openLocation = normalizeOpenLocation((args) => {
  const params = {
    ...args,
    latitude: String(args.latitude),
    longitude: String(args.longitude),
  };
  isDingdingMiniapp ? dd.openLocation(params) : my.openLocation(params);
}, CONTAINER_NAME.ALIPAY);

export default openLocation;
