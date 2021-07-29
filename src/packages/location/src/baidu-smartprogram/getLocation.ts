import { normalizeGetLocation } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const getLocation = normalizeGetLocation((args) => swan.getLocation(args), CONTAINER_NAME.BAIDU);

export default getLocation;
