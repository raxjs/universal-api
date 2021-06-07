import { ChooseImageOptions } from '../types';
import { CONTAINER_NAME } from '@utils/constant';
import { normalize } from '../common';
import chooseMedia from '@uni/video/lib/web/chooseMedia';

const chooseImage = normalize.chooseImage((args: ChooseImageOptions = {}) => {
  const { count = 1, sourceType = ['album', 'camera'], success = () => {}, fail = () => {}, complete = () => {} } = args;
  chooseMedia({
    count: 1,
    accept: 'image/*',
  }).then((res) => {
    const result = {
      tempFilePaths: res.tempFiles.map((item) => item.tempFilePath),
      tempFiles: res.tempFiles.map((item) => ({
        path: item.tempFilePath,
        size: item.size,
      })),
      files: res.files,
    };
    success(result as any);
    complete(result as any);
  }).catch((e) => {
    fail(e);
    complete(e);
  });
}, CONTAINER_NAME.WEB);

export default chooseImage;
