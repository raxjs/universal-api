import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { normalizeHide } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const hide = normalizeHide((args) => (isDingdingMiniapp ? dd.hideKeyboard(args) : my.hideKeyboard(args)), CONTAINER_NAME.ALIPAY);

export default hide;
