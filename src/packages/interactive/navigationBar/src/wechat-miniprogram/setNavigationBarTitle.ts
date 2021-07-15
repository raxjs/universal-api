import { normalizeSetNavigationBarTitle } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const setNavigationBarTitle = normalizeSetNavigationBarTitle((args) => wx.setNavigationBarTitle(args), CONTAINER_NAME.WECHAT);

export default setNavigationBarTitle;
