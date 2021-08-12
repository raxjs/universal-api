import { normalizeStop } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const stopPullDownRefresh = normalizeStop((args) => swan.stopPullDownRefresh(args), CONTAINER_NAME.BAIDU);

export default stopPullDownRefresh;
