import { normalizeHide } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

export const hideLoading = normalizeHide((args) => tt.hideLoading(args), CONTAINER_NAME.BYTE);

export default hideLoading;
