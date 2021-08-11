import { normalizeGetLocation } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const getLocation = normalizeGetLocation((args) => ks.getLocation(args), CONTAINER_NAME.KWAI);

export default getLocation;
