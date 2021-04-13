import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const chooseImage = normalize.chooseImage((args) => wx.chooseImage(args), CONTAINER_NAME.WECHAT);

export default chooseImage;
