import { getNetworkTypeFactory } from '../factory';

declare const wx: any;

const getNetworkType = getNetworkTypeFactory(wx);

export default {
  getNetworkType
};
