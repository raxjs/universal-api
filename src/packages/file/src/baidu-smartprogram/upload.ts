import { CONTAINER_NAME } from '@utils/constant';
import { normalize } from '../common';
import {
  UploadOptions, UploadTask,
} from '../types';

const upload = normalize.upload((options: UploadOptions) => {
  const { url, filePath, fileName, hideLoading, header, formData, success, fail, complete, timeout } = options;
  return swan.uploadFile({
    url,
    filePath,
    name: fileName,
    hideLoading,
    header,
    timeout,
    formData,
    success(res) {
      success && success(res);
    },
    fail(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res);
    },
  }) as UploadTask;
}, CONTAINER_NAME.BAIDU);

export default upload;
