import { GetOrRemoveSyncOptionStruct, GetStorageSyncRes } from '../types';
import { styleIn } from '@utils/styleOptions';
import { CONTAINER_NAME } from '@utils/constant';

const getStorageSync = (args: GetOrRemoveSyncOptionStruct): GetStorageSyncRes => {
  args = styleIn(args, CONTAINER_NAME.BYTE);
  return { data: tt.getStorageSync(args.key) };
};

export default getStorageSync;
