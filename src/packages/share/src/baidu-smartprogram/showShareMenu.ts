import {
  Options,
} from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

function openShare(options: Options) {
  const { title, content, imageUrl, path, success, fail, complete } = options;
  return swan.openShare({
    title,
    content,
    imageUrl,
    path,
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
}
export default normalize(openShare, CONTAINER_NAME.BAIDU);
