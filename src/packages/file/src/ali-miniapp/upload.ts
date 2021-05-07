import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import {
  UploadOptions,
} from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const upload = normalize.upload((options: UploadOptions) => {
  const { url, filePath, fileName, fileType = 'image', hideLoading, header, formData, success, fail, complete } = options;
  const uploadFile = isDingdingMiniapp ? dd.uploadFile : my.uploadFile;
  return uploadFile({
    url,
    filePath,
    fileName,
    fileType,
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
}, CONTAINER_NAME.ALIPAY);

export default upload;
