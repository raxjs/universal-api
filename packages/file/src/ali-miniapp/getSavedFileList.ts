import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import {
  GetSavedListOptions,
} from '../types';
import { normalize } from '../common';

const getSavedList = normalize.getSavedList((options: GetSavedListOptions) => {
  const { success, fail, complete } = options;
  const getSavedFileList = isDingdingMiniapp ? dd.getSavedFileList : my.getSavedFileList;
  getSavedFileList({
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


export default getSavedList;
