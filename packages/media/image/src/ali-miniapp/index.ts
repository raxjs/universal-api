import { isDingdingMiniapp } from '../../../../utils/miniappEnvApp';
import { normalize } from '../common';

export const chooseImage = normalize.chooseImage((args) => isDingdingMiniapp ? dd.chooseImage(args) : my.chooseImage(args));

export const compressImage = normalize.compressImage((args) => {
  if (isDingdingMiniapp) {
    args.filePaths = [args.src];
  } else {
    args.apFilePaths = [args.src];
  }
  args && typeof args.quality === 'number' && (args.compressLevel = args.quality);
  return isDingdingMiniapp ? dd.compressImage(args) : my.compressImage(args);
});

export const getImageInfo = normalize.getImageInfo((args) => isDingdingMiniapp ? dd.getImageInfo(args) : my.getImageInfo(args));

export const previewImage = normalize.previewImage((args) => isDingdingMiniapp ? dd.previewImage(args) : my.previewImage(args));

export const saveImage = normalize.saveImage((args) => isDingdingMiniapp ? dd.saveImage(args) : my.saveImage(args));

export default {
  chooseImage,
  compressImage,
  getImageInfo,
  previewImage,
  saveImage,
};
