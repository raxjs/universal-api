import { initApi } from '../common';

export const chooseImage = initApi.chooseImage((args) => tt.chooseImage(args));

export const compressImage = initApi.compressImage((args) => {
  // 压缩质量映射
  const quality = args && args.quality != undefined ? args.quality : 2;
  args.quality = quality * 33;
  return tt.compressImage(args);
});

export const getImageInfo = initApi.getImageInfo((args) => tt.getImageInfo(args));

export default {
  chooseImage,
  compressImage,
  getImageInfo
};
