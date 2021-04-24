import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const chooseVideo = normalize.chooseVideo((args) => wx.chooseVideo(args), CONTAINER_NAME.WECHAT);

export default chooseVideo;
