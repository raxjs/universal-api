import { isDingdingMiniapp } from '@uni/env';
import { initApi } from '../common';

const compressImage = (args) => {
  if (isDingdingMiniapp) {
    args.filePaths = [args.src];
  } else {
    args.apFilePaths = [args.src];
  }
  const quality = args && args.quality != undefined ? args.quality : 2;
  args.compressLevel = quality;
  return isDingdingMiniapp ? dd.compressImage(args) : my.compressImage(args);
};

export default initApi(compressImage);
