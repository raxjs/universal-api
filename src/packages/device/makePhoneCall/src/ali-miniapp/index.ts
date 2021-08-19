import { Options } from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';
import { isDingdingMiniapp } from '@utils/miniappEnvApp';

const makePhoneCall = (options: Options): void => {
  if (isDingdingMiniapp) {
    dd.showCallMenu(options);
  } else {
    const { phoneNumber, ...ext } = options;
    my.makePhoneCall({
      ...ext,
      number: phoneNumber,
    });
  }
};

export default normalize(makePhoneCall, CONTAINER_NAME.ALIPAY);
