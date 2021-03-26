import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const getImageInfo = normalize.getImageInfo((args) => {
  const image = new Image();
  image.src = args.src;
  if (image.naturalWidth) {
    const res = {
      width: image.naturalWidth,
      height: image.naturalHeight,
      path: args.src,
    };
    args.success(res);
    args.complete(res);
  } else {
    const setImageInfo = () => {
      const res = {
        width: image.width,
        height: image.height,
        path: args.src,
      };
      args.success(res);
      args.complete(res);
    };
    if (image.complete) {
      setImageInfo();
    } else {
      let checkTimer = null;
      const clear = () => {
        checkTimer = null;
        clearInterval(checkTimer);
      };
      checkTimer = setInterval(() => {
        if (image.width > 0 || image.height > 0) {
          setImageInfo();
          clear();
        }
      }, 40);
      image.onload = () => {
        if (checkTimer) {
          setImageInfo();
          clear();
        }
      };
      // eslint-disable-next-line no-multi-assign
      image.onabort = image.onerror = (e) => {
        args.fail(e);
        args.complete(e);
        clear();
      };
    }
  }
}, CONTAINER_NAME.WEB);

export default getImageInfo;
