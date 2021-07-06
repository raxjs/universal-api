import { normalizeHide } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

export const hideLoading = normalizeHide((args) => ks.hideLoading(args), CONTAINER_NAME.KWAI);

export default hideLoading;
