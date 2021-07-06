import { normalizeShow } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

export const showLoading = normalizeShow((args) => ks.showLoading(args), CONTAINER_NAME.KWAI);

export default showLoading;
