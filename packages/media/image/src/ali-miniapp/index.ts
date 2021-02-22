import { isDingdingMiniapp } from '../../../../utils/miniappEnvApp';
import { initApi } from '../common';

export const chooseImage = initApi.chooseImage((args) => isDingdingMiniapp ? dd.chooseImage(args) : my.chooseImage(args));

export const compressImage = initApi.compressImage((args) => {
  if (isDingdingMiniapp) {
    args.filePaths = [args.src];
  } else {
    args.apFilePaths = [args.src];
  }
  const quality = args && args.quality != undefined ? args.quality : 2;
  args.compressLevel = quality;
  return isDingdingMiniapp ? dd.compressImage(args) : my.compressImage(args);
});

export const getImageInfo = initApi.getImageInfo((args) => isDingdingMiniapp ? dd.getImageInfo(args) : my.getImageInfo(args));

export default {
  chooseImage,
  compressImage,
  getImageInfo
};
