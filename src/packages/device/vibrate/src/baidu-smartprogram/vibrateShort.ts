import { CONTAINER_NAME } from '@utils/constant';
import { normalize } from '../common';

const vibrateShort = normalize(({ success, fail, complete }) => {
  swan.vibrateShort({
    success,
    fail,
    complete,
  });
}, CONTAINER_NAME.BAIDU);

export default vibrateShort;
