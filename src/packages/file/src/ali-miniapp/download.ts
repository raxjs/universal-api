import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import {
  DownloadOptions,
} from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

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
}, CONTAINER_NAME.ALIPAY);

export default downloadFile;
