import { GetOrRemoveSyncOptionStruct } from '../types';
import { styleIn } from '@utils/styleOptions';
import { CONTAINER_NAME } from '@utils/constant';

const removeStorageSync = (args: GetOrRemoveSyncOptionStruct) => {
  args = styleIn(args, CONTAINER_NAME.BYTE);
  return tt.removeStorageSync(args.key);
};

export default removeStorageSync;
