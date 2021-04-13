import { normalizeGetLocation } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const getLocation = normalizeGetLocation((args) => wx.getLocation(args), CONTAINER_NAME.WECHAT);

export default getLocation;
