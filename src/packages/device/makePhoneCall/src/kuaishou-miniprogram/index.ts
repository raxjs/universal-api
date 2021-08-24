import { Options } from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const makePhoneCall = (options: Options): void => {
  ks.makePhoneCall(options);
};

export default normalize(makePhoneCall, CONTAINER_NAME.KWAI);
