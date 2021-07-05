import { normalizeStop } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const stopPullDownRefresh = normalizeStop((args) => ks.stopPullDownRefresh(args), CONTAINER_NAME.KWAI);

export default stopPullDownRefresh;
