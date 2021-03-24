import {
  GetInfoResponseData,
  GetInfoOptions,
} from '../types';
import { normalize } from '../common';

const getInfo = normalize.getInfo((options: GetInfoOptions) => {
  const { filePath, success, fail, complete } = options;
  tt.getFileInfo({
    filePath,
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
});

export default getInfo;
