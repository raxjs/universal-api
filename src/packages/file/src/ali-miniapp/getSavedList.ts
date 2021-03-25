import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import {
  GetSavedListOptions,
} from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

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
}, CONTAINER_NAME.ALIPAY);


export default getSavedList;
