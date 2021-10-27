import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { CONTAINER_NAME } from '@utils/constant';
import { normalize } from '../common';

const vibrateShort = normalize(({ success, fail, complete }) => {
  if (isDingdingMiniapp) {
    dd.vibrateShort({
      success,
      fail,
      complete,
    });
  } else {
    my.vibrateShort(() => {
      success && success();
      complete && complete();
    });
  }
}, CONTAINER_NAME.ALIPAY);

export default vibrateShort;
