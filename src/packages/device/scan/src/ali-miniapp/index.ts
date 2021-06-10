import { normalized } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

export default normalized((options) => {
  const { hideAlbum, scanType, success, fail, complete } = options;
  my.scan({
    hideAlbum,
    scanType,
    success,
    fail,
    complete,
  });
}, CONTAINER_NAME.ALIPAY);
