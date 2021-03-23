import {
  GetSavedInfoResponseData,
  GetSavedInfoOptions,
} from '../types';
import { normalize } from '../common';

const getSavedInfo = normalize.getSavedInfo((options: GetSavedInfoOptions) => {
  const { filePath, success, fail, complete } = options;
  wx.getFileInfo({
    filePath,
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
