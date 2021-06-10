import { GetOrRemoveSyncOptionStruct, GetStorageSyncRes } from '../types';
import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { styleIn } from '@utils/styleOptions';
import { CONTAINER_NAME } from '@utils/constant';

const getStorageSync = (args: GetOrRemoveSyncOptionStruct): GetStorageSyncRes => (isDingdingMiniapp ? dd.getStorageSync(styleIn(args, CONTAINER_NAME.ALIPAY)) : my.getStorageSync(styleIn(args, CONTAINER_NAME.ALIPAY)));

export default getStorageSync;
