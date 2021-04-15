import { GetOrRemoveSyncOptionStruct } from '../types';
import { styleIn } from '@utils/styleOptions';
import { CONTAINER_NAME } from '@utils/constant';

const getStorageSync = (args: GetOrRemoveSyncOptionStruct) => {
  args = styleIn(args, CONTAINER_NAME.WECHAT);
  return { data: wx.getStorageSync(args.key) };
};

export default getStorageSync;
