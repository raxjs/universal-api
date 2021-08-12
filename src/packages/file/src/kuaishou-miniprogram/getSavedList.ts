import {
  GetSavedListOptions,
} from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const getSavedList = normalize.getSavedList((options: GetSavedListOptions) => {
  const { success, fail, complete } = options;
  ks.getSavedFileList({
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
}, CONTAINER_NAME.KWAI);


export default getSavedList;
