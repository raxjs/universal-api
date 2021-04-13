import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import {
  RemoveSavedOptions,
} from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const removeSaved = normalize.removeSaved((options: RemoveSavedOptions) => {
  const { filePath, success, fail, complete } = options;
  const removeSavedFile = isDingdingMiniapp ? dd.removeSavedFile : my.removeSavedFile;
  removeSavedFile({
    apFilePath: filePath,
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
}, CONTAINER_NAME.ALIPAY);


export default removeSaved;
