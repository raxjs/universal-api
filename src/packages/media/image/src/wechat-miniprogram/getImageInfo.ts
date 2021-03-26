import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const getImageInfo = normalize.getImageInfo((args) => wx.getImageInfo(args), CONTAINER_NAME.WECHAT);

export default getImageInfo;
