import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

export default normalize((args) => wx.showModal(args), CONTAINER_NAME.WECHAT);
