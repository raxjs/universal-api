import { CONTAINER_NAME } from '@utils/constant';
import { normalize } from '../common';

const vibrateLong = normalize(({ success, fail, complete }) => {
  tt.vibrateLong({
    success,
    fail,
    complete,
  });
}, CONTAINER_NAME.BYTE);

export default vibrateLong;
