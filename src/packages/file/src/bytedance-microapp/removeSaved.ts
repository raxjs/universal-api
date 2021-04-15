import {
  RemoveSavedOptions,
} from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const removeSaved = normalize.removeSaved((options: RemoveSavedOptions) => {
  const { filePath, success, fail, complete } = options;
  tt.removeSavedFile({
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
}, CONTAINER_NAME.BYTE);


export default removeSaved;
