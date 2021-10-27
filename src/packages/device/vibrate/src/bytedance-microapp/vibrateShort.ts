import { CONTAINER_NAME } from '@utils/constant';
import { normalize } from '../common';

const vibrateShort = normalize(({ success, fail, complete }) => {
  tt.vibrateShort({
    success,
    fail,
    complete,
  });
}, CONTAINER_NAME.BYTE);

export default vibrateShort;
