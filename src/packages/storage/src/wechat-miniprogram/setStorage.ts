import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const setStorage = normalize.setStorage((args) => wx.setStorage(args), CONTAINER_NAME.WECHAT);

export default setStorage;
