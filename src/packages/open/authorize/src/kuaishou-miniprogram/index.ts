import {
  Options,
} from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

function authorize(options: Options) {
  const { scope, success, fail, complete } = options;
  return ks.authorize({
    scope,
    success() {
      success && success();
    },
    fail(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res);
    },
  });
}
export default normalize(authorize, CONTAINER_NAME.KWAI);
