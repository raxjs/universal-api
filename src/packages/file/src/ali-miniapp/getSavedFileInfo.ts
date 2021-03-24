import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import {
  GetSavedInfoResponseData,
  GetSavedInfoOptions,
} from '../types';
import { normalize } from '../common';

const getSavedInfo = normalize.getSavedInfo((options: GetSavedInfoOptions) => {
  const { filePath, success, fail, complete } = options;
  const getSavedFileInfo = isDingdingMiniapp ? dd.getSavedFileInfo : my.getSavedFileInfo;
  getSavedFileInfo({
    apFilePath: filePath,
    success(res: GetSavedInfoResponseData) {
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


export default getSavedInfo;
