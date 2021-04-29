import { normalizeChooseLocation } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const chooseLocation = normalizeChooseLocation((args) => wx.chooseLocation(args), CONTAINER_NAME.WECHAT);

export default chooseLocation;
