import { getNetworkTypeFactory } from '../factory';

declare const my: any;

const getNetworkType = getNetworkTypeFactory(my);

export default {
  getNetworkType
};
