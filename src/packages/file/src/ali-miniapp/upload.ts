import { CONTAINER_NAME } from '@utils/constant';
import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { normalize } from '../common';
import { UploadOptions, UploadProgressUpdateCallback, UploadTask } from '../types';

const upload = normalize.upload<undefined | UploadTask>((options: UploadOptions) => {
  const { url, filePath, fileName, fileType = 'image', hideLoading, header, formData, success, fail, complete } = options;
  const uploadFile = isDingdingMiniapp ? dd.uploadFile : my.uploadFile;
  const task = uploadFile({
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

  if (task && task.onProgressUpdate) {
    // 支付宝 10.1.35 及以上版本支持
    const progressCallback: UploadProgressUpdateCallback[] = [];
    task.onProgressUpdate(({ progress, totalBytesWritten, totalBytesExpectedToWrite }) => {
      const res = {
        progress,
        totalBytesSent: totalBytesWritten,
        totalBytesExpectedToSend: totalBytesExpectedToWrite,
      };
      if (progressCallback.length > 0) {
        progressCallback.forEach((x) => x(res));
      }
    });
    return {
      abort() {
        task.abort();
      },
      onProgressUpdate(cb) {
        progressCallback.push(cb);
      },
      offProgressUpdate(cb) {
        if (progressCallback.indexOf(cb) !== -1) {
          progressCallback.splice(progressCallback.indexOf(cb), 1);
        }
      },
    };
  }
}, CONTAINER_NAME.ALIPAY);

export default upload;
