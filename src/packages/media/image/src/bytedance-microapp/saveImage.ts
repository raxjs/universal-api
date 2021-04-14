import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const saveImage = normalize.saveImage((args) => {
  tt.saveImageToPhotosAlbum({
    ...args,
    filePath: args.url,
  });
}, CONTAINER_NAME.BYTE);

export default saveImage;
