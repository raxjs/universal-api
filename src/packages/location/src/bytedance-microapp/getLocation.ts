import { normalizeGetLocation } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const getLocation = normalizeGetLocation((args) => tt.getLocation(args), CONTAINER_NAME.BYTE);

export default getLocation;
