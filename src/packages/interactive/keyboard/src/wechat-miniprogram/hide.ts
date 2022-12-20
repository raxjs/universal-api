import { normalizeHide } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

export const hide = normalizeHide((args) => my.hideKeyboard(args), CONTAINER_NAME.WECHAT);

export default hide;