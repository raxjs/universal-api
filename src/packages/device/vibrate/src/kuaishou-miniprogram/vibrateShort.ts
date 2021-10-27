import { CONTAINER_NAME } from '@utils/constant';
import { normalize } from '../common';

const vibrateShort = normalize(({ fail, complete }) => {
  fail && fail('@uni：vibrateShort 快手小程序暂不支持');
  complete && complete('@uni：vibrateShort 快手小程序暂不支持');
}, CONTAINER_NAME.KWAI);

export default vibrateShort;
