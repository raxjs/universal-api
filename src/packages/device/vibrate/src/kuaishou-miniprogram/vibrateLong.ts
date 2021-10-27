import { CONTAINER_NAME } from '@utils/constant';
import { normalize } from '../common';

const vibrateLong = normalize(({ fail, complete }) => {
  fail && fail('@uni：vibrateLong 快手小程序暂不支持');
  complete && complete('@uni：vibrateLong 快手小程序暂不支持');
}, CONTAINER_NAME.KWAI);

export default vibrateLong;
