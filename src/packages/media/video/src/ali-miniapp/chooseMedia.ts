import { CONTAINER_NAME } from '@utils/constant';
import { normalize } from '../common';
import showActionSheet from '@uni/action-sheet/lib/ali-miniapp';
import chooseImage from '@uni/image/lib/ali-miniapp/chooseImage';
import chooseVideo from '@uni/video/lib/ali-miniapp/chooseVideo';

const chooseMedia = normalize.chooseMedia((args) => {
  const { mediaType = ['image', 'video'] } = args || {};

  if (mediaType.length === 1 && mediaType[0] === 'image') {
    return {
      type: 'image',
      tempFiles: chooseImage(args).tempFiles,
    };
  }
  if (mediaType.length === 1 && mediaType[0] === 'image') {
    return {
      type: 'video',
      tempFiles: chooseVideo(args),
    };
  }
  return showActionSheet({
    itemList: ['图片', '视频'],
  }).then((res) => {
    if (res.tapIndex === 0) {
      return {
        type: 'image',
        tempFiles: chooseImage(args).tempFiles,
      };
    }
    if (res.tapIndex === 1) {
      return {
        type: 'video',
        tempFiles: chooseVideo(args),
      };
    }
    return Promise.reject({ errMsg: '用户取消选择' });
  });
}, CONTAINER_NAME.ALIPAY);

export default chooseMedia;
