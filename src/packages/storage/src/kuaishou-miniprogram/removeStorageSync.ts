import { GetOrRemoveSyncOptionStruct } from '../types';
import { styleIn } from '@utils/styleOptions';
import { CONTAINER_NAME } from '@utils/constant';

const removeStorageSync = (args: GetOrRemoveSyncOptionStruct) => {
  args = styleIn(args, CONTAINER_NAME.KWAI);
  return ks.removeStorageSync(args.key);
};

export default removeStorageSync;
