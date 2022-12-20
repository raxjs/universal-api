import { normalizeHide } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

export const hide = normalizeHide((args) => tt.hideKeyboard(args), CONTAINER_NAME.BYTE);

export default hide;