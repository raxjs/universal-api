import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const compressImage = normalize.compressImage((args) => {
  args && typeof args.quality === 'number' && (args.quality = args.quality * 33);
  return wx.compressImage(args);
}, CONTAINER_NAME.WECHAT);

export default compressImage;
