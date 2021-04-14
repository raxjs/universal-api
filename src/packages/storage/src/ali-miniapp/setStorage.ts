import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { CONTAINER_NAME } from '@utils/constant';
import { normalize } from '../common';

const setStorage = normalize.setStorage((args) => (isDingdingMiniapp ? dd.setStorage(args) : my.setStorage(args)), CONTAINER_NAME.ALIPAY);

export default setStorage;
