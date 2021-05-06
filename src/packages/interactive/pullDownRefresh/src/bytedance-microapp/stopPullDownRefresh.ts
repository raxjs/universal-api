import { normalizeStop } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const stopPullDownRefresh = normalizeStop((args) => tt.stopPullDownRefresh(args), CONTAINER_NAME.BYTE);

export default stopPullDownRefresh;
