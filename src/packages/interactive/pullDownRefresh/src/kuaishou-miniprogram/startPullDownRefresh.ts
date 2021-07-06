import { normalizeStart } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const startPullDownRefresh = normalizeStart((args) => ks.startPullDownRefresh(args), CONTAINER_NAME.KWAI);

export default startPullDownRefresh;
