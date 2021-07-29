import { normalizeOpenLocation } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const openLocation = normalizeOpenLocation((args) => swan.openLocation({
  ...args,
  latitude: Number(args.latitude),
  longitude: Number(args.longitude),
}), CONTAINER_NAME.BAIDU);

export default openLocation;
