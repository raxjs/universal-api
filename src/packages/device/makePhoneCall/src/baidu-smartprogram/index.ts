import { Options } from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const makePhoneCall = (options: Options): void => {
  swan.makePhoneCall(options);
};

export default normalize(makePhoneCall, CONTAINER_NAME.BAIDU);
