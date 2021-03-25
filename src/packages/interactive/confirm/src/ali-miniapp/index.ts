import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { CONTAINER_NAME } from '@utils/constant';
import { normalize } from '../common';

const confirm = (args) => (isDingdingMiniapp ? dd.confirm(args) : my.confirm(args));

export default normalize(confirm, CONTAINER_NAME.ALIPAY);
