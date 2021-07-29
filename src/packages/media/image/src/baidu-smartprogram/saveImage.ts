import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const saveImage = normalize.saveImage((args) => {
  swan.saveImageToPhotosAlbum({
    ...args,
    filePath: args.url,
  });
}, CONTAINER_NAME.BAIDU);

export default saveImage;
