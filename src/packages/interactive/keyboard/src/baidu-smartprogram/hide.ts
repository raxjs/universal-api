import { normalizeHide } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const hide = normalizeHide((args) => swan.hideKeyboard(args), CONTAINER_NAME.BAIDU);

export default hide;
