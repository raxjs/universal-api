import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { SaveOptions,
} from '../types';
import { normalize } from '../common';

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
});
export default save;
