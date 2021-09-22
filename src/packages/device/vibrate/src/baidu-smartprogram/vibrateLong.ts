import { CONTAINER_NAME } from '@utils/constant';
import { normalize } from '../common';

const vibrateLong = normalize(({ success, fail, complete }) => {
  swan.vibrateLong({
    success,
    fail,
    complete,
  });
}, CONTAINER_NAME.BAIDU);

export default vibrateLong;
