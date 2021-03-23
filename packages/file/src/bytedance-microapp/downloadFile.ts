import {
  DownloadOptions,
} from '../types';
import { normalize } from '../common';


const downloadFile = normalize.download((options: DownloadOptions) => {
  const { url, header, success, fail, complete, ...rest } = options;
  return tt.downloadFile({
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
});

export default downloadFile;
