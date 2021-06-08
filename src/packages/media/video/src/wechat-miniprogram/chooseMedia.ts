import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const chooseMedia = normalize.chooseMedia((args) => (wx.canIUse('chooseMedia') ? wx.chooseMedia(args) : wx.chooseImage(args)), CONTAINER_NAME.WECHAT);

export default chooseMedia;
