import { Options } from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

export default normalize((options: Options) => {
  wx.pageScrollTo(options);
}, CONTAINER_NAME.WECHAT);
