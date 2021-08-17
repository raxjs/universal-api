import { Options } from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';
import { isDingdingMiniapp } from '@utils/miniappEnvApp';

const makePhoneCall = (options: Options): void => {
  if (isDingdingMiniapp) {
    dd.showCallMenu(options);
  } else {
    my.makePhoneCall({
      number: options?.phoneNumber,
    });

    // auto trigger success callback
    setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/dot-notation
      options?.['success'](); // set resolved
    });
  }
};

export default normalize(makePhoneCall, CONTAINER_NAME.ALIPAY);
