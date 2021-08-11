import {
  RemoveSavedOptions,
} from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const removeSaved = normalize.removeSaved((options: RemoveSavedOptions) => {
  const { filePath, success, fail, complete } = options;
  ks.removeSavedFile({
    filePath,
    success() {
      success && success();
    },
    fail(res) {
      fail && fail(res);
    },
    complete(res?) {
      complete && complete(res);
    },
  });
}, CONTAINER_NAME.KWAI);


export default removeSaved;
