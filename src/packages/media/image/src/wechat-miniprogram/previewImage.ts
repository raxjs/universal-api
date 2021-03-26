import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const previewImage = normalize.previewImage((args) => {
  wx.previewImage({
    ...args,
    current: typeof args.current === 'number' ? args.urls[args.current] : args.urls[0],
  });
}, CONTAINER_NAME.WECHAT);

export default previewImage;
