import { normalizeHide } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

export const hideLoading = normalizeHide((args) => swan.hideLoading(args), CONTAINER_NAME.BAIDU);

export default hideLoading;
