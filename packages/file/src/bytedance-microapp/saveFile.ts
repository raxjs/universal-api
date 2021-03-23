import { SaveOptions,
} from '../types';
import { normalize } from '../common';

const save = normalize.save((options: SaveOptions) => {
  const { tempFilePath, success, fail, complete } = options;
  tt.saveFile({
    tempFilePath,
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
