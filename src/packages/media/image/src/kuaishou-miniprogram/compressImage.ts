import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const compressImage = normalize.compressImage((args) => {
  args && typeof args.quality === 'number' && (args.quality *= 33);
  return ks.compressImage(args);
}, CONTAINER_NAME.KWAI);

export default compressImage;
