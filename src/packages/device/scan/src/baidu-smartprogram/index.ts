import { normalized } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

export default normalized((options) => {
  const { success, fail, complete } = options;
  swan.scanCode({
    success,
    fail,
    complete,
  });
}, CONTAINER_NAME.BAIDU);
