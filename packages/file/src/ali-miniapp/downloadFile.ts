import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import {
  DownloadOptions,
} from '../types';
import { normalize } from '../common';


const downloadFile = normalize.download((options: DownloadOptions) => {
  const { url, header, success, fail, complete } = options;
  const _downloadFile = isDingdingMiniapp ? dd.downloadFile : my.downloadFile;
  _downloadFile({
    url,
    header,
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

export default downloadFile;
