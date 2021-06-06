import { CONTAINER_NAME } from '@utils/constant';
import { normalize } from '../common';
import {
  UploadOptions, UploadTask,
} from '../types';

const upload = normalize.upload((options: UploadOptions) => {
  const { url, filePath, fileName, hideLoading, header, formData, success, fail, complete } = options;
  return tt.uploadFile({
    url,
    filePath,
    name: fileName,
    hideLoading,
    header,
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
}, CONTAINER_NAME.BYTE);

export default upload;
