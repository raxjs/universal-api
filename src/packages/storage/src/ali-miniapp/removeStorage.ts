import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { CONTAINER_NAME } from '@utils/constant';
import { normalize } from '../common';

const removeStorage = normalize.removeStorage((args) => (isDingdingMiniapp ? dd.removeStorage(args) : my.removeStorage(args)), CONTAINER_NAME.ALIPAY);

export default removeStorage;
