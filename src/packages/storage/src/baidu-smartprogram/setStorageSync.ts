import { SetSyncOptionStruct } from '../types';
import { styleIn } from '@utils/styleOptions';
import { CONTAINER_NAME } from '@utils/constant';

const setStorageSync = (args: SetSyncOptionStruct) => {
  args = styleIn(args, CONTAINER_NAME.BAIDU);
  return swan.setStorageSync(args.key, args.data);
};

export default setStorageSync;
