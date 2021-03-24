import {
  RemoveSavedOptions,
} from '../types';
import { normalize } from '../common';

const removeSaved = normalize.removeSaved((options: RemoveSavedOptions) => {
  const { filePath, success, fail, complete } = options;
  wx.removeSavedFile({
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
});


export default removeSaved;
