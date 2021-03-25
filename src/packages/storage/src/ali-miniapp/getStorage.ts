import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { CONTAINER_NAME } from '@utils/constant';
import { normalize } from '../common';

const getStorage = normalize.getStorage((args) => (isDingdingMiniapp ? dd.getStorage(args) : my.getStorage(args)), CONTAINER_NAME.ALIPAY);

export default getStorage;
