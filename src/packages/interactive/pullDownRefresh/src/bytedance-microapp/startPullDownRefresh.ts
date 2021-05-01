import { normalizeStart } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

export const startPullDownRefresh = normalizeStart((args) => tt.startPullDownRefresh(args), CONTAINER_NAME.BYTE);

export default startPullDownRefresh;
