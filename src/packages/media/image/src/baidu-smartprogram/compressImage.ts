import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const compressImage = normalize.compressImage((args) => {
  args && typeof args.quality === 'number' && (args.quality *= 33);
  return swan.compressImage(args);
}, CONTAINER_NAME.BAIDU);

export default compressImage;
