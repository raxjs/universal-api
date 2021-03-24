import {
  UploadOptions,
} from '../types';
import { normalize } from '../common';

const upload = normalize.upload((options: UploadOptions) => {
  const { url, filePath, fileName, hideLoading, header, formData, success, fail, complete } = options;
  tt.uploadFile({
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
  });
});

export default upload;
