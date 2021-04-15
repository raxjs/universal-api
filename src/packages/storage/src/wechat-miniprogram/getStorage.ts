import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const getStorage = normalize.getStorage((args) => wx.getStorage(args), CONTAINER_NAME.WECHAT);

export default getStorage;
