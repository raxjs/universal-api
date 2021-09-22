import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { CONTAINER_NAME } from '@utils/constant';
import { normalize } from '../common';

const vibrateLong = normalize(({ success, fail, complete }) => {
  if (isDingdingMiniapp) {
    dd.vibrateLong({
      success,
      fail,
      complete,
    });
  } else {
    my.vibrateLong(() => {
      success && success();
      complete && complete();
    });
  }
}, CONTAINER_NAME.ALIPAY);

export default vibrateLong;
