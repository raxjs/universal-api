import { CONTAINER_NAME } from '@utils/constant';
import { normalize } from '../common';
import showActionSheet from '@uni/action-sheet/lib/ali-miniapp';

const chooseMedia = normalize.chooseMedia((args) => {
  const { mediaType } = args;
  const imageFn = () => {
    return my.chooseImage({
      ...args,
      success: (res) => {
        const result = {
          type: 'image',
          tempFiles: res.tempFiles
            ? res.tempFiles.map((i) => ({
              ...i,
              tempFilePath: i.path,
            }))
            : res.tempFilePaths.map((i) => ({
              tempFilePath: i,
            })),
        };
        args.success(result);
      },
    });
  };

  const videoFn = () => {
    return my.chooseVideo({
      ...args,
      success: (res) => {
        const result = {
          type: 'video',
          tempFiles: [res],
        };
        args.success(result);
      },
    });
  };

  if (mediaType.length === 1 && mediaType[0] === 'image') {
    imageFn();
  } else if (mediaType.length === 1 && mediaType[0] === 'video') {
    videoFn();
  } else {
    showActionSheet({
      itemList: ['图片', '视频'],
    }).then((res) => {
      if (res.tapIndex === 0) {
        imageFn();
      } else if (res.tapIndex === 1) {
        videoFn();
      } else {
        return Promise.reject({ errMsg: '用户取消选择' });
      }
    });
  }
}, CONTAINER_NAME.ALIPAY);

export default chooseMedia;
