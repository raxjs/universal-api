import { normalizeHide } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const hide = normalizeHide((args) => wx.hideKeyboard(args), CONTAINER_NAME.WECHAT);

export default hide;
