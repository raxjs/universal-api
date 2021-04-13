import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const saveImage = normalize.saveImage((args) => {
  wx.saveImageToPhotosAlbum({
    ...args,
    filePath: args.url,
  });
}, CONTAINER_NAME.WECHAT);

export default saveImage;
