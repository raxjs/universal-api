import { initApi } from '../common';

export const chooseImage = initApi.chooseImage((args) => tt.chooseImage(args));

export const compressImage = initApi.compressImage((args) => {
  args && typeof args.quality === 'number' && (args.quality = args.quality * 33);
  return tt.compressImage(args);
});

export const getImageInfo = initApi.getImageInfo((args) => tt.getImageInfo(args));

export const previewImage = initApi.previewImage((args) => {
  tt.previewImage({
    ...args,
    current: typeof args.current === 'number' ? args.urls[args.current] : args.urls[0]
  });
});

export const saveImage = initApi.saveImage((args) => {
  tt.saveImageToPhotosAlbum({
    ...args,
    filePath: args.url
  });
});

export default {
  chooseImage,
  compressImage,
  getImageInfo,
  previewImage,
  saveImage,
};
