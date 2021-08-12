import {
  DownloadOptions,
} from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const downloadFile = normalize.download((options: DownloadOptions) => {
  const { url, header, success, fail, complete, ...rest } = options;
  return ks.downloadFile({
    url,
    header,
    ...rest,
    success(res) {
      success && success({
        tempFilePath: res.tempFilePath,
      });
    },
    fail(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res.tempFilePath ? {
        tempFilePath: res.tempFilePath,
      } : res);
    },
  });
}, CONTAINER_NAME.KWAI);

export default downloadFile;
