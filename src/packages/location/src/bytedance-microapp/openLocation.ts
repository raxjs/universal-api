import { normalizeOpenLocation } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const openLocation = normalizeOpenLocation((args) => tt.openLocation({
  ...args,
  latitude: Number(args.latitude),
  longitude: Number(args.longitude),
}), CONTAINER_NAME.BYTE);

export default openLocation;
