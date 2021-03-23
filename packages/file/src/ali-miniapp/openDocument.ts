import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import {
  OpenDocumentOptions,
} from '../types';
import { normalize } from '../common';

const openDocument = normalize.openDocument((options: OpenDocumentOptions) => {
  const { filePath, fileType, success, fail, complete } = options;
  const openDocumentApi = isDingdingMiniapp ? dd.openDocument : my.openDocument;
  openDocumentApi({
    filePath,
    fileType,
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

export default openDocument;
