import { isDingdingMiniapp } from '../../../../utils/miniappEnvApp';
import { initApi } from '../common';

export const chooseImage = initApi.chooseImage((args) => isDingdingMiniapp ? dd.chooseImage(args) : my.chooseImage(args));

export const compressImage = initApi.compressImage((args) => {
  if (isDingdingMiniapp) {
    args.filePaths = [args.src];
  } else {
    args.apFilePaths = [args.src];
  }
  args && typeof args.quality === 'number' && (args.compressLevel = args.quality);
  return isDingdingMiniapp ? dd.compressImage(args) : my.compressImage(args);
});

export const getImageInfo = initApi.getImageInfo((args) => isDingdingMiniapp ? dd.getImageInfo(args) : my.getImageInfo(args));

export const previewImage = initApi.previewImage((args) => isDingdingMiniapp ? dd.previewImage(args) : my.previewImage(args));

export const saveImage = initApi.saveImage((args) => isDingdingMiniapp ? dd.saveImage(args) : my.saveImage(args));

export default {
  chooseImage,
  compressImage,
  getImageInfo,
  previewImage,
  saveImage,
};
