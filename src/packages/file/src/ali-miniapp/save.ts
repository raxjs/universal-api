import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { SaveOptions,
} from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const save = normalize.save((options: SaveOptions) => {
  const { tempFilePath, success, fail, complete } = options;
  const saveFile = isDingdingMiniapp ? dd.saveFile : my.saveFile;
  saveFile({
    apFilePath: tempFilePath,
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
export default save;
