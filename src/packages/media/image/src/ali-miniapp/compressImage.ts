import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { CONTAINER_NAME } from '@utils/constant';
import { normalize } from '../common';

const compressImage = normalize.compressImage((args) => {
  if (isDingdingMiniapp) {
    args.filePaths = [args.src];
  } else {
    args.apFilePaths = [args.src];
  }
  args && typeof args.quality === 'number' && (args.compressLevel = args.quality);
  return isDingdingMiniapp ? dd.compressImage(args) : my.compressImage(args);
}, CONTAINER_NAME.ALIPAY);

export default compressImage;
