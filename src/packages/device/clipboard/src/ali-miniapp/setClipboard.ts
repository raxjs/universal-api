import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { CONTAINER_NAME } from '@utils/constant';
import { normalizeSet } from '../common';

const setClipboard = normalizeSet((args) => (isDingdingMiniapp ? dd.setClipboard(args) : my.setClipboard(args)), CONTAINER_NAME.ALIPAY);

export default setClipboard;
