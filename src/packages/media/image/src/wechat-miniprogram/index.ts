import { normalize } from '../common';

export const chooseImage = normalize.chooseImage((args) => wx.chooseImage(args));

export const compressImage = normalize.compressImage((args) => {
  args && typeof args.quality === 'number' && (args.quality = args.quality * 33);
  return wx.compressImage(args);
});

export const getImageInfo = normalize.getImageInfo((args) => wx.getImageInfo(args));

export const previewImage = normalize.previewImage((args) => {
  wx.previewImage({
    ...args,
    current: typeof args.current === 'number' ? args.urls[args.current] : args.urls[0]
  });
});

export const saveImage = normalize.saveImage((args) => {
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
