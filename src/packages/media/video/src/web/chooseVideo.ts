import { ChooseVideoOptions } from '../types';
import { CONTAINER_NAME } from '@utils/constant';
import { normalize } from '../common';
import chooseMedia from '@uni/video/lib/web/chooseMedia';

const chooseVideo = normalize.chooseVideo((args: ChooseVideoOptions = {}) => {
  const { success = () => {}, fail = () => {}, complete = () => {} } = args;
  chooseMedia({
    count: 1,
    accept: 'video/*',
  }).then((res) => {
    const result = {
      ...res.tempFiles[0],
      files: res.files,
    };
    success(result as any);
    complete(result as any);
  }).catch((e) => {
    fail(e);
    complete(e);
  });
}, CONTAINER_NAME.WEB);

export default chooseVideo;
