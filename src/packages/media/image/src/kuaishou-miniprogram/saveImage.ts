import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const saveImage = normalize.saveImage((args) => {
  ks.saveImageToPhotosAlbum({
    ...args,
    filePath: args.url,
  });
}, CONTAINER_NAME.KWAI);

export default saveImage;
