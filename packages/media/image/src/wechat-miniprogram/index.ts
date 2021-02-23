import { initApi } from '../common';

export const chooseImage = initApi.chooseImage((args) => wx.chooseImage(args));

export const compressImage = initApi.compressImage((args) => {
  args && typeof args.quality === 'number' && (args.quality = args.quality * 33);
  return wx.compressImage(args);
});

export const getImageInfo = initApi.getImageInfo((args) => wx.getImageInfo(args));

export const previewImage = initApi.previewImage((args) => {
  wx.previewImage({
    ...args,
    current: typeof args.current === 'number' ? args.urls[args.current] : args.urls[0]
  });
});

export const saveImage = initApi.saveImage((args) => {
  wx.saveImageToPhotosAlbum({
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
