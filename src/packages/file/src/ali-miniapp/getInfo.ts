import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import {
  GetInfoResponseData,
  GetInfoOptions,
} from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const getInfo = normalize.getInfo((options: GetInfoOptions) => {
  const { filePath, digestAlgorithm, success, fail, complete } = options;
  const getFileInfo = isDingdingMiniapp ? dd.getFileInfo : my.getFileInfo;
  getFileInfo({
    apFilePath: filePath,
    digestAlgorithm,
    success(res: GetInfoResponseData) {
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

export default getInfo;
