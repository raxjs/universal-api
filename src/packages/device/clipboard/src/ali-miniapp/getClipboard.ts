import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { CONTAINER_NAME } from '@utils/constant';
import { normalizeGet } from '../common';

const getClipboard = normalizeGet((args) => (isDingdingMiniapp ? dd.getClipboard(args) : my.getClipboard(args)), CONTAINER_NAME.ALIPAY);

export default getClipboard;
