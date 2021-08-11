import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { CONTAINER_NAME } from '@utils/constant';
import { normalizeGetLocation } from '../common';

const getLocation = normalizeGetLocation((args) => {
  args.resultType = args.resultType || 0;
  if (args?.type && typeof args.type === 'string') {
    args.type = 0;
  }
  if (args?.resultType && typeof args.resultType === 'number' && !isNaN(args.resultType)) {
    args.type = `${args.resultType }`;
  }
  return isDingdingMiniapp ? dd.getLocation(args) : my.getLocation(args);
}, CONTAINER_NAME.ALIPAY);

export default getLocation;
