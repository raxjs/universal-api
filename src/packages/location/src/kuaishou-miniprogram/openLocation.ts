import { normalizeOpenLocation } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const openLocation = normalizeOpenLocation((args) => ks.openLocation({
  ...args,
  latitude: Number(args.latitude),
  longitude: Number(args.longitude),
}), CONTAINER_NAME.KWAI);

export default openLocation;
