import { normalizeHide } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

export const hide = normalizeHide((args) => ks.hideKeyboard(args), CONTAINER_NAME.KWAI);

export default hide;