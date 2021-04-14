import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const previewImage = normalize.previewImage((args) => {
  tt.previewImage({
    ...args,
    current: typeof args.current === 'number' ? args.urls[args.current] : args.urls[0],
  });
}, CONTAINER_NAME.BYTE);

export default previewImage;
