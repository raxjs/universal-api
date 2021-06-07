import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { CONTAINER_NAME } from '@utils/constant';
import { normalize } from '../common';
import showActionSheet from '@uni/action-sheet/lib/ali-miniapp';

const chooseMedia = normalize.chooseMedia((args) => {
  const { mediaType = ['image', 'video'] } = args || {};
  const imageFn = isDingdingMiniapp ? dd.chooseImage : my.chooseImage;
  const videoFn = isDingdingMiniapp ? dd.chooseVideo : my.chooseVideo;

  if (mediaType.length === 1 && mediaType[0] === 'image') {
    return imageFn(args);
  }
  if (mediaType.length === 1 && mediaType[0] === 'image') {
    return videoFn(args);
  }
  return showActionSheet({
    itemList: ['图片', '视频'],
  }).then((res) => {
    if (res.tapIndex === 0) {
      return imageFn(args);
    }
    if (res.tapIndex === 1) {
      return videoFn(args);
    }
    return Promise.resolve({ errMsg: '用户取消选择' });
  });
}, CONTAINER_NAME.ALIPAY);

export default chooseMedia;
