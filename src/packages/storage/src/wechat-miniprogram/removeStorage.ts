import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const removeStorage = normalize.removeStorage((args) => wx.removeStorage(args), CONTAINER_NAME.WECHAT);

export default removeStorage;
