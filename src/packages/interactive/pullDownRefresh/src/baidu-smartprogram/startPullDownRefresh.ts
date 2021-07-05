import { normalizeStart } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const startPullDownRefresh = normalizeStart((args) => swan.startPullDownRefresh(args), CONTAINER_NAME.BAIDU);

export default startPullDownRefresh;
